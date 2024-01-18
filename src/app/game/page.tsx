"use client";

import { nanoid } from "nanoid";
import { useEffect, useMemo, useState } from "react";

import { PHONICS_LIST } from "@/app/constants/list";

export default function Page() {
  const [word, setWord] = useState<string | undefined>(undefined);
  const [grapheme, setGrapheme] = useState<string | undefined>(undefined);

  const { wordList, graphemeList, testDict } = useMemo(() => {
    const wordList: any[] = [];
    const graphemeList: any[] = [];
    const testDict: any = {};
    PHONICS_LIST.map(({ phoneme, grapheme, words }) => {
      const { word, pronunciation, chinese_meanings } = words[0];
      wordList.push({ word, pronunciation, chinese_meanings });
      graphemeList.push({ phoneme, grapheme });
      testDict[grapheme] = word;
    });
    return { wordList, graphemeList, testDict };
  }, []);

  console.log("word", word);
  console.log("grapheme", grapheme);
  useEffect(() => {
    if (word && grapheme) {
      console.log("test", testDict[grapheme] === word);
    }
  }, [grapheme, testDict, word]);

  return (
    <div className="flex ">
      <div className="basis-1/2 text-center">
        {graphemeList.map(({ grapheme }) => {
          return (
            <div
              key={nanoid()}
              onClick={() => {
                setGrapheme(grapheme);
              }}
            >
              {grapheme}
            </div>
          );
        })}
      </div>
      <div className="basis-1/2  text-center">
        {wordList.map(({ word }) => {
          return (
            <div
              key={nanoid()}
              onClick={() => {
                setWord(word);
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
}
