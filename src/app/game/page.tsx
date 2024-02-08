"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import Grapheme, { GraphemeType } from "@/app/components/Grapheme";
import Word, { WordProps, WordType } from "@/app/components/Word";
import { PHONICS_LIST } from "@/app/constants/list";
import useGraphemeBlindBox from "@/app/hooks/useGraphemeBlindBox";
import useHowler from "@/app/hooks/useHowler";
import useMeaning, { MeaningType } from "@/app/hooks/useMeaning";
import useWordBlindBox from "@/app/hooks/useWordBlindBox";

export default function Page() {
  const { play } = useHowler();

  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const { meaningContent, showMeaning } = useMeaning();

  const [word, setWord] = useState<string | undefined>(undefined);
  const [grapheme, setGrapheme] = useState<string | undefined>(undefined);

  const [wordBoxIndex, setWordBoxIndex] = useState(0);
  const [graphemeBoxIndex, setGraphemeBoxIndex] = useState(0);

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
      setGrapheme(phoneme + grapheme);
      play(phoneme);
      showMeaning(meaning);
    },
    [play, showMeaning],
  );

  const onClickWord = useCallback(
    (meaning: MeaningType) => {
      setWord(meaning.word);
      setWordBoxIndex(meaning.boxIndex ?? 0);
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
      testDict[phoneme + grapheme] = word;
    });
    return { wordList, graphemeList, testDict };
  }, []);

  const graphemeArr = useMemo(() => {
    const array: GraphemeType[][] = [[], [], [], [], []];
    const n = Math.ceil(graphemeList.length / 5);
    let sArray: number[] = [];
    for (let i = 0; i < n; i++) {
      sArray = [...sArray, ...shuffleArray()];
    }
    graphemeList.forEach((word, index) => {
      array[sArray[index]].push(word);
    });
    return array;
  }, [graphemeList]);

  const wordArr = useMemo(() => {
    const array: WordProps[][] = [[], [], [], [], []];
    const n = Math.ceil(wordList.length / 5);
    let sArray: number[] = [];
    for (let i = 0; i < n; i++) {
      sArray = [...sArray, ...shuffleArray()];
    }
    wordList.forEach((word, index) => {
      array[sArray[index]].push(word);
    });
    return array;
  }, [wordList]);

  const {
    GraphemeBlindBox: GraphemeBlindBox1,
    setGraphemeIndex: setGraphemeIndex1,
  } = useGraphemeBlindBox({
    graphemeList: graphemeArr[0],
    onClickGrapheme,
    onClick: (obj: any) => {
      setGraphemeBoxIndex(obj.boxIndex);
    },
    boxIndex: 0,
  });
  const {
    GraphemeBlindBox: GraphemeBlindBox2,
    setGraphemeIndex: setGraphemeIndex2,
  } = useGraphemeBlindBox({
    graphemeList: graphemeArr[1],
    onClickGrapheme,
    onClick: (obj: any) => {
      setGraphemeBoxIndex(obj.boxIndex);
    },
    boxIndex: 1,
  });
  const {
    GraphemeBlindBox: GraphemeBlindBox3,
    setGraphemeIndex: setGraphemeIndex3,
  } = useGraphemeBlindBox({
    graphemeList: graphemeArr[2],
    onClickGrapheme,
    onClick: (obj: any) => {
      setGraphemeBoxIndex(obj.boxIndex);
    },
    boxIndex: 2,
  });
  const {
    GraphemeBlindBox: GraphemeBlindBox4,
    setGraphemeIndex: setGraphemeIndex4,
  } = useGraphemeBlindBox({
    graphemeList: graphemeArr[3],
    onClickGrapheme,
    onClick: (obj: any) => {
      setGraphemeBoxIndex(obj.boxIndex);
    },
    boxIndex: 3,
  });
  const {
    GraphemeBlindBox: GraphemeBlindBox5,
    setGraphemeIndex: setGraphemeIndex5,
  } = useGraphemeBlindBox({
    graphemeList: graphemeArr[4],
    onClickGrapheme,
    onClick: (obj: any) => {
      setGraphemeBoxIndex(obj.boxIndex);
    },
    boxIndex: 4,
  });

  const setGraphemeIndexList = useMemo(
    () => [
      setGraphemeIndex1,
      setGraphemeIndex2,
      setGraphemeIndex3,
      setGraphemeIndex4,
      setGraphemeIndex5,
    ],
    [
      setGraphemeIndex1,
      setGraphemeIndex2,
      setGraphemeIndex3,
      setGraphemeIndex4,
      setGraphemeIndex5,
    ],
  );

  const { WordBlindBox: WordBlindBox1, setWordIndex: setWordIndex1 } =
    useWordBlindBox({
      wordList: wordArr[0],
      voice,
      onClick: (obj: MeaningType) => {
        onClickWord(obj);
      },
      boxIndex: 0,
    });
  const { WordBlindBox: WordBlindBox2, setWordIndex: setWordIndex2 } =
    useWordBlindBox({
      wordList: wordArr[1],
      voice,
      onClick: (obj: MeaningType) => {
        onClickWord(obj);
      },
      boxIndex: 1,
    });
  const { WordBlindBox: WordBlindBox3, setWordIndex: setWordIndex3 } =
    useWordBlindBox({
      wordList: wordArr[2],
      voice,
      onClick: (obj: MeaningType) => {
        onClickWord(obj);
      },
      boxIndex: 2,
    });
  const { WordBlindBox: WordBlindBox4, setWordIndex: setWordIndex4 } =
    useWordBlindBox({
      wordList: wordArr[3],
      voice,
      onClick: (obj: MeaningType) => {
        onClickWord(obj);
      },
      boxIndex: 3,
    });
  const { WordBlindBox: WordBlindBox5, setWordIndex: setWordIndex5 } =
    useWordBlindBox({
      wordList: wordArr[4],
      voice,
      onClick: (obj: MeaningType) => {
        onClickWord(obj);
      },
      boxIndex: 4,
    });

  const setWordIndexList = useMemo(
    () => [
      setWordIndex1,
      setWordIndex2,
      setWordIndex3,
      setWordIndex4,
      setWordIndex5,
    ],
    [setWordIndex1, setWordIndex2, setWordIndex3, setWordIndex4, setWordIndex5],
  );

  useEffect(() => {
    if (word && grapheme && testDict[grapheme] === word) {
      // console.log("testDict", testDict);
      // console.log("word", word);
      // console.log("grapheme", grapheme);
      // console.log("test", testDict[grapheme] === word);
      setGraphemeIndexList[graphemeBoxIndex]((prev: number) =>
        prev + 1 > graphemeArr[graphemeBoxIndex].length ? prev : prev + 1,
      );
      setWordIndexList[wordBoxIndex]((prev: number) =>
        prev + 1 > wordArr[wordBoxIndex].length ? prev : prev + 1,
      );
    }
  }, [
    grapheme,
    graphemeArr,
    graphemeBoxIndex,
    setGraphemeIndexList,
    setWordIndexList,
    testDict,
    word,
    wordArr,
    wordBoxIndex,
  ]);

  return (
    <>
      <div>
        <div className="flex flex-row">
          <div className="basis-1/5">
            <GraphemeBlindBox1 />
          </div>
          <div className="basis-1/5">
            <GraphemeBlindBox2 />
          </div>
          <div className="basis-1/5">
            <GraphemeBlindBox3 />
          </div>
          <div className="basis-1/5">
            <GraphemeBlindBox4 />
          </div>
          <div className="basis-1/5">
            <GraphemeBlindBox5 />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/5">
            <WordBlindBox1 />
          </div>
          <div className="basis-1/5">
            <WordBlindBox2 />
          </div>
          <div className="basis-1/5">
            <WordBlindBox3 />
          </div>
          <div className="basis-1/5">
            <WordBlindBox4 />
          </div>
          <div className="basis-1/5">
            <WordBlindBox5 />
          </div>
        </div>
      </div>
      {meaningContent}
    </>
  );
}

function shuffleArray() {
  const array = [0, 1, 2, 3, 4];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
