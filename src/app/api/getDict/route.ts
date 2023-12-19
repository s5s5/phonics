import { NextResponse } from "next/server";
import fsPromises from "fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";
export async function GET() {
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
    const american_phonetic = (en_US[word.toLowerCase()] as string)
      .split(",")
      .map((s: string) => s.trim().replaceAll("/", ""));
    return american_phonetic;
  }

  const dict = words.map((word: any) => {
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
