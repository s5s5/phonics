"use client";

import { nanoid } from "nanoid";
import { useCallback, useEffect, useMemo, useState } from "react";

import Grapheme, { GraphemeType } from "@/app/components/Grapheme";
import Word from "@/app/components/Word";
import { PHONICS_LIST } from "@/app/constants/list";
import useHowler from "@/app/hooks/useHowler";
import useMeaning, { MeaningType } from "@/app/hooks/useMeaning";

export default function Page() {
  const { play } = useHowler();

  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const { meaningContent, showMeaning } = useMeaning();

  const [word, setWord] = useState<string | undefined>(undefined);
  const [grapheme, setGrapheme] = useState<string | undefined>(undefined);

  const onClickGrapheme = useCallback(
    ({
      grapheme,
      phoneme,
      meaning,
    }: {
      grapheme: string;
      phoneme: string;
      meaning: MeaningType;
    }) => {
      setGrapheme(grapheme);
      play(phoneme);
      showMeaning(meaning);
    },
    [play, showMeaning],
  );

  const onClickWord = useCallback(
    (meaning: MeaningType) => {
      setWord(meaning.word);
      showMeaning(meaning);
    },
    [showMeaning],
  );

  const { wordList, graphemeList, testDict } = useMemo(() => {
    const wordList: any[] = [];
    const graphemeList: GraphemeType[] = [];
    const testDict: any = {};
    PHONICS_LIST.map(({ phoneme, grapheme, pronunciation, tips, words }) => {
      const { word } = words[0];
      wordList.push({ word: words[0], grapheme });
      graphemeList.push({ phoneme, grapheme, pronunciation, tips });
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
    <>
      <div className="flex ">
        <div className="basis-1/2 text-center">
          {graphemeList.map(({ phoneme, grapheme, pronunciation, tips }) => {
            return (
              <Grapheme
                phoneme={phoneme}
                grapheme={grapheme}
                pronunciation={pronunciation}
                tips={tips}
                onClick={onClickGrapheme}
                key={nanoid()}
              />
            );
          })}
        </div>
        <div className="basis-1/2  text-center">
          {wordList.map(({ word, grapheme }) => {
            return (
              <Word
                wordObject={word}
                voice={voice}
                grapheme={grapheme}
                onClick={onClickWord}
                key={nanoid()}
              />
            );
          })}
        </div>
      </div>
      {meaningContent}
    </>
  );
}
