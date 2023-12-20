import path from "node:path";

import fs from "fs";
import fsPromises from "fs/promises";
import { NextResponse } from "next/server";

import { LIST } from "@/app/constants";

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
  // console.log("words", words);
  // console.log("en_US", en_US);
  // console.log("coca20000", coca20000);
  function finePronunciation(word: string) {
    if (!en_US[word.toLowerCase()]) {
      // console.log("miss word", word);
      return [];
    }
    return (en_US[word.toLowerCase()] as string)
      .split(",")
      .map((s: string) => s.trim().replaceAll("/", ""));
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
    const inflections = Object.keys(word.inf).map((key) => ({
      [key]: finePronunciation(key),
    }));
    const chinese_meanings = coca20000.find(
      (coca: any) => coca.name === word.lemma,
    )?.trans;
    return {
      rank: word.rank,
      word: word.lemma,
      american_phonetic,
      inflections,
      chinese_meanings,
    };
  });

  const newLIST = LIST.map((item: any) => {
    const { grapheme, phoneme } = item;
    const words = dict
      ?.filter((item: any) => {
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
      })
      .map((item: any) => item.word);
    return { ...item, words };
  });

  fs.writeFileSync(localListPath, JSON.stringify(newLIST));

  return NextResponse.json({ LIST: newLIST });
}

async function getLocalData(fileName: string) {
  const filePath = path.join(process.cwd(), "public", fileName);
  const jsonData = await fsPromises.readFile(filePath);
  return JSON.parse(jsonData.toString());
}
