import path from "node:path";

import fsPromises from "fs/promises";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET() {
  const words = await getLocalData("words.json");
  const en_US = await getLocalData("en_US.json");
  const coca20000 = await getLocalData("coca20000.json");

  function finePronunciation(word: string) {
    if (!en_US[word.toLowerCase()]) {
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
  return NextResponse.json({ dict });
}

async function getLocalData(fileName: string) {
  const filePath = path.join(process.cwd(), "public", fileName);
  const jsonData = await fsPromises.readFile(filePath);
  return JSON.parse(jsonData.toString());
}
