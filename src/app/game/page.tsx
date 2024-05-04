"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { GraphemeCardProps } from "@/app/components/GraphemeCard";
import { VoiceSelector } from "@/app/components/VoiceSelector";
import { splitWord, WordCardProps } from "@/app/components/WordCard";
import { PHONICS_LIST } from "@/app/constants/list";
import useGraphemeBlindBox from "@/app/hooks/useGraphemeBlindBox";
import useHowler from "@/app/hooks/useHowler";
import useMeaning from "@/app/hooks/useMeaning";
import useWordBlindBox from "@/app/hooks/useWordBlindBox";

const Page = () => {
  const { play } = useHowler();

  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const { meaningContent, showMeaning } = useMeaning();

  const [word, setWord] = useState<string | undefined>(undefined);
  const [grapheme, setGrapheme] = useState<string | undefined>(undefined);

  const [wordBoxIndex, setWordBoxIndex] = useState(0);
  const [graphemeBoxIndex, setGraphemeBoxIndex] = useState(0);

  const { wordList, graphemeList, testDict } = useMemo(() => {
    const wordList: WordCardProps[] = [];
    const graphemeList: GraphemeCardProps[] = [];
    const testDict: any = {};
    PHONICS_LIST.map(({ phoneme, grapheme, pronunciation, tips, words }) => {
      const word = words[0];
      wordList.push({
        voice,
        grapheme,
        word: word.word,
        onClick: () => {
          setWord(word.word);
          showMeaning({
            word: word.word,
            pronunciation: word.pronunciation,
            chinese_meanings: word.chinese_meanings,
            wordList: splitWord(word.word, grapheme),
          });
        },
      });
      graphemeList.push({
        grapheme,
        pronunciation,
        onClick: () => {
          setGrapheme(phoneme + grapheme);
          play(phoneme);
          showMeaning({
            wordList: [{ word: grapheme }],
            chinese_meanings: tips,
          });
        },
      });
      testDict[phoneme + grapheme] = word;
    });
    return { wordList, graphemeList, testDict };
  }, []);

  const graphemeArr = useMemo(() => {
    const array: GraphemeCardProps[][] = [[], [], [], [], []];
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
    const array: WordCardProps[][] = [[], [], [], [], []];
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
    graphemeCardList: graphemeArr[0],
    boxIndex: 0,
    onClick: (boxIndex) => {
      setGraphemeBoxIndex(boxIndex);
    },
  });
  const {
    GraphemeBlindBox: GraphemeBlindBox2,
    setGraphemeIndex: setGraphemeIndex2,
  } = useGraphemeBlindBox({
    graphemeCardList: graphemeArr[1],
    boxIndex: 1,
    onClick: (boxIndex) => {
      setGraphemeBoxIndex(boxIndex);
    },
  });
  const {
    GraphemeBlindBox: GraphemeBlindBox3,
    setGraphemeIndex: setGraphemeIndex3,
  } = useGraphemeBlindBox({
    graphemeCardList: graphemeArr[2],
    boxIndex: 2,
    onClick: (boxIndex) => {
      setGraphemeBoxIndex(boxIndex);
    },
  });
  const {
    GraphemeBlindBox: GraphemeBlindBox4,
    setGraphemeIndex: setGraphemeIndex4,
  } = useGraphemeBlindBox({
    graphemeCardList: graphemeArr[3],
    boxIndex: 3,
    onClick: (boxIndex) => {
      setGraphemeBoxIndex(boxIndex);
    },
  });
  const {
    GraphemeBlindBox: GraphemeBlindBox5,
    setGraphemeIndex: setGraphemeIndex5,
  } = useGraphemeBlindBox({
    graphemeCardList: graphemeArr[4],
    boxIndex: 4,
    onClick: (boxIndex) => {
      setGraphemeBoxIndex(boxIndex);
    },
  });

  const setGraphemeIndexList = useMemo(
    () => [
      setGraphemeIndex1,
      setGraphemeIndex2,
      setGraphemeIndex3,
      setGraphemeIndex4,
      setGraphemeIndex5,
    ],
    [],
  );

  const { WordBlindBox: WordBlindBox1, setWordIndex: setWordIndex1 } =
    useWordBlindBox({
      wordCardList: wordArr[0],
      boxIndex: 0,
      onClick: (boxIndex) => {
        setWordBoxIndex(boxIndex);
      },
    });
  const { WordBlindBox: WordBlindBox2, setWordIndex: setWordIndex2 } =
    useWordBlindBox({
      wordCardList: wordArr[1],
      boxIndex: 1,
      onClick: (boxIndex) => {
        setWordBoxIndex(boxIndex);
      },
    });
  const { WordBlindBox: WordBlindBox3, setWordIndex: setWordIndex3 } =
    useWordBlindBox({
      wordCardList: wordArr[2],
      boxIndex: 2,
      onClick: (boxIndex) => {
        setWordBoxIndex(boxIndex);
      },
    });
  const { WordBlindBox: WordBlindBox4, setWordIndex: setWordIndex4 } =
    useWordBlindBox({
      wordCardList: wordArr[3],
      boxIndex: 3,
      onClick: (boxIndex) => {
        setWordBoxIndex(boxIndex);
      },
    });
  const { WordBlindBox: WordBlindBox5, setWordIndex: setWordIndex5 } =
    useWordBlindBox({
      wordCardList: wordArr[4],
      boxIndex: 4,
      onClick: (boxIndex) => {
        setWordBoxIndex(boxIndex);
      },
    });

  const setWordIndexList = useMemo(
    () => [
      setWordIndex1,
      setWordIndex2,
      setWordIndex3,
      setWordIndex4,
      setWordIndex5,
    ],
    [],
  );

  useEffect(() => {
    console.log("testDict", testDict);
    console.log("graphemeBoxIndex", graphemeBoxIndex);
    console.log("wordBoxIndex", wordBoxIndex);
    console.log("word", word);
    console.log("grapheme", grapheme);
    console.log("test", grapheme && testDict[grapheme].word === word);
    if (word && grapheme && testDict[grapheme].word === word) {
      setGraphemeIndexList[graphemeBoxIndex]((prev: number) =>
        prev + 1 > graphemeArr[graphemeBoxIndex].length ? prev : prev + 1,
      );
      setWordIndexList[wordBoxIndex]((prev: number) =>
        prev + 1 > wordArr[wordBoxIndex].length ? prev : prev + 1,
      );
      setWord(undefined);
      setGrapheme(undefined);
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
      <VoiceSelector onVoiceChange={setVoice} />
    </>
  );
};

const shuffleArray = () => {
  const array = [0, 1, 2, 3, 4];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default Page;
