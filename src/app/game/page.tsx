"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import Grapheme, { GraphemeType } from "@/app/components/Grapheme";
import GraphemeBlindBox from "@/app/components/GraphemeBlindBox";
import Word, { WordProps, WordType } from "@/app/components/Word";
import { PHONICS_LIST } from "@/app/constants/list";
import useHowler from "@/app/hooks/useHowler";
import useMeaning, { MeaningType } from "@/app/hooks/useMeaning";
import useWordBlindBox from "@/app/hooks/useWordBlindBox";

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
    const wordList: WordProps[] = [];
    const graphemeList: GraphemeType[] = [];
    const testDict: any = {};
    PHONICS_LIST.map(({ phoneme, grapheme, pronunciation, tips, words }) => {
      const { word } = words[0];
      wordList.push({ wordInfo: words[0] as WordType, grapheme });
      graphemeList.push({ phoneme, grapheme, pronunciation, tips });
      testDict[grapheme] = word;
    });
    return { wordList, graphemeList, testDict };
  }, []);

  const { WordBlindBox, setWordIndex } = useWordBlindBox({
    wordList,
    voice,
    onClick: (obj: MeaningType) => {
      onClickWord(obj);
    },
  });

  console.log("word", word);
  console.log("grapheme", grapheme);
  useEffect(() => {
    if (word && grapheme && testDict[grapheme] === word) {
      console.log("test", testDict[grapheme] === word);
      setWordIndex((prev: number) =>
        prev + 1 > wordList.length ? prev : prev + 1,
      );
    }
  }, [grapheme, setWordIndex, testDict, word, wordList.length]);

  return (
    <>
      <div className="flex ">
        <div className="basis-1/2 text-center">
          <GraphemeBlindBox
            graphemeList={graphemeList}
            onClickGrapheme={onClickGrapheme}
            onClick={() => {
              // TODO remove onClick
            }}
          />
        </div>
        <div className="basis-1/2  text-center">
          <WordBlindBox />
        </div>
      </div>
      {meaningContent}
    </>
  );
}
