import path from "node:path";

import * as cheerio from "cheerio";
import fs from "fs";
import { HTMLToJSON } from "html-to-json-parser";
import { NextRequest, NextResponse } from "next/server";

import { getLocalData } from "@/app/api/getList/route";
import { PHONICS_LIST } from "@/app/constants/list";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  const localListPath = path.join(
    process.cwd(),
    "public",
    "pronunciation.json",
  );
  if (fs.existsSync(localListPath)) {
    const P = await getLocalData("pronunciation.json");
    return NextResponse.json({ P });
  }

  const words = [];
  PHONICS_LIST.map((item) => {
    item.words.map(({ word }) => {
      words.push(word);
    });
  });
  const uniqueWords = [...new Set(words)];
  // const test = await getPronunciation("abandon");
  const P = await makeMultipleRequests(uniqueWords, 10);
  fs.writeFileSync(localListPath, JSON.stringify(P));

  return NextResponse.json({ P });
}

async function makeMultipleRequests(urls, limit) {
  const results = [];
  for (let i = 0; i < urls.length; i += limit) {
    let chunk = urls.slice(i, i + limit);
    let promises = chunk.map((url) => getPronunciation(url));
    try {
      let data = await Promise.all(promises);
      results.push(...data);
    } catch (error) {
      console.error(error);
    }
  }
  return results;
}

async function getPronunciation(word: string) {
  console.log("loading ", word);
  try {
    const htmlResponse = await fetch(
      `https://www.dictionary.com/browse/${word}`,
    );
    const html = await htmlResponse.text();
    const $ = cheerio.load(html);
    const p = $('[data-type="pronunciation-text"]').eq(0).html();
    return await HTMLToJSON(`<div data="${word}">${p}</div>`);
  } catch (e) {
    console.error(word, "error", e);
    return null;
  }
}
