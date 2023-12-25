import path from "node:path";

import fs from "fs";
import fsPromises from "fs/promises";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

import { LIST, POS } from "@/app/constants";

export const dynamic = "force-dynamic";
export async function GET() {
  const localListPath = path.join(process.cwd(), "public", "list.json");
  if (fs.existsSync(localListPath)) {
    const LIST = await getLocalData("list.json");
    return NextResponse.json({ LIST });
  }

  const words = await getLocalData("words.json");
  const en_US = await getLocalData("en_US.json");
  const coca20000 = await getLocalData("coca20000.json");
  const pronunciation = await getLocalData("pronunciation.json");

  function finePronunciation(word: string) {
    if (!en_US[word.toLowerCase()]) {
      return [];
    }
    return (en_US[word.toLowerCase()] as string)
      .split(",")
      .map((s: string) => s.trim().replaceAll("/", ""));
  }

  function findPronunciation(word: string) {
    const item = pronunciation.find(
      (item: any) => item.attributes.data === word,
    );
    if (item) {
      let content = item.content;
      const hasF = content.findIndex(
        (obj: any) => typeof obj === "string" && obj.includes(";"),
      );
      if (hasF !== -1) {
        content = content.slice(0, hasF + 1);
      }
      return;
    }
    return;
  }

  const newWords: any[] = [];
  words.map((word: any) => {
    const ind = newWords.findIndex(
      (w: any) => w.lemma.toLowerCase() === word.lemma.toLowerCase(),
    );
    if (ind === -1) {
      newWords.push(word);
    } else {
      if (
        Object.keys(newWords[ind].inf).length < Object.keys(word.inf).length
      ) {
        newWords[ind] = word;
      }
    }
  });

  const dict = newWords.map((word: any) => {
    const american_phonetic = finePronunciation(word.lemma);
    const chinese_meanings = getMeaning(
      coca20000.find((coca: any) => coca.name === word.lemma)?.trans,
    );
    return {
      rank: word.rank,
      word: word.lemma,
      american_phonetic,
      pronunciation: findPronunciation(word.lemma),
      chinese_meanings,
    };
  });

  const newLIST = LIST.map((item: any) => {
    const { grapheme, phoneme } = item;
    const words = dict?.filter((item: any) => {
      let testGrapheme = item.word.includes(grapheme);
      if (grapheme.includes("_")) {
        const regex = new RegExp(grapheme.replace("_", "."), "gi");
        testGrapheme = regex.test(item.word);
      }

      return (
        testGrapheme &&
        item.american_phonetic.findIndex((phonetic: string) =>
          phonetic.includes(phoneme),
        ) !== -1
      );
    });
    if (words?.length > 10) words.length = 10;
    return { ...item, words };
  });

  fs.writeFileSync(localListPath, JSON.stringify(newLIST));

  return NextResponse.json({ LIST: newLIST });
}

export async function getLocalData(fileName: string) {
  const filePath = path.join(process.cwd(), "public", fileName);
  const jsonData = await fsPromises.readFile(filePath);
  return JSON.parse(jsonData.toString());
}
const getMeaning = (trans: any) => {
  if (!trans) return;
  if (trans.length === 0) return;

  const trimMeaning = (trans[0] as string).trim();
  if (!trimMeaning) return;
  if (trimMeaning === "") return;

  let list: any[] = [];
  POS.map((pos) => {
    if (list.length === 0) {
      list = sliceMeaning(trimMeaning, pos);
    }

    const newList: any[] = [];
    list.map((item) => {
      if (item.pos) {
        newList.push(item);
      } else {
        newList.push(...sliceMeaning(item.w, pos));
      }
    });
    list = newList;
  });

  let list1 = list.filter(({ w }) => w !== "");
  const has8 = list1.findIndex((item) => !item.pos && item.w === "&");
  if (has8 !== -1) {
    const o = {
      pos: true,
      w: list1[has8 - 1].w + "&" + list1[has8 + 1].w,
    };
    list1 = [...list1.slice(0, has8 - 1), o, ...list1.slice(has8 + 1)];
  }

  const pairedArray = list1.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);

  return pairedArray[0][1].w.replaceAll(",", "，");
};
const sliceMeaning = (meaning: string, pos: string) => {
  const clearMeaning = meaning.replaceAll(" ", "");
  const posIndex = clearMeaning.indexOf(pos);
  if (posIndex !== -1) {
    let first = clearMeaning.slice(0, posIndex);
    const second = clearMeaning.slice(posIndex + pos.length);

    return [{ w: first }, { w: pos, pos: true }, { w: second }];
  }
  return [{ w: clearMeaning }];
};
