"use client";

import { useEffect, useMemo, useState } from "react";

import { GraphemeCard, GraphemeCardProps } from "@/app/components/GraphemeCard";
import { splitWord, WordCard, WordCardProps } from "@/app/components/WordCard";
import { PHONICS_LIST } from "@/app/constants/list";
import useHowler from "@/app/hooks/useHowler";
import useMeaning from "@/app/hooks/useMeaning";
import useVoiceSelector from "@/app/hooks/useVoiceSelector";

const Page = () => {
  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const [selectedWord, setSelectedWord] = useState<string | undefined>(
    undefined,
  );
  const [selectedGrapheme, setSelectedGrapheme] = useState<string | undefined>(
    undefined,
  );

  const [selectedWordGroup, setSelectedWordGroup] = useState<
    number | undefined
  >(undefined);
  const [selectedGraphemeGroup, setSelectedGraphemeGroup] = useState<
    number | undefined
  >(undefined);

  const [wordGroupIndex, setWordGroupIndex] = useState([0, 0, 0, 0]);
  const [graphemeGroupIndex, setGraphemeGroupIndex] = useState([0, 0, 0, 0]);

  const { meaningContent, showMeaning } = useMeaning();
  const { play } = useHowler();
  useVoiceSelector(setVoice);

  const { wordGroups, graphemeGroups } = useMemo(() => {
    const wordList: WordCardProps[] = [];
    const graphemeList: GraphemeCardProps[] = [];
    PHONICS_LIST.sort(() => 0.5 - Math.random())
      .slice(0, 28)
      .map(({ phoneme, grapheme, pronunciation, tips, words }) => {
        const word = words[Math.floor(Math.random() * words.length)];
        wordList.push({
          voice,
          grapheme,
          word: word.word,
          onClick: () => {
            setSelectedWord(grapheme);
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
            setSelectedGrapheme(grapheme);
            play(phoneme);
            showMeaning({
              wordList: [{ word: grapheme }],
              chinese_meanings: tips,
            });
          },
        });
      });

    const wordGroups: WordCardProps[][] = [[], [], [], []];
    const wordDistribution = distribute(wordList);
    wordList.forEach((wordCard, index) => {
      wordGroups[wordDistribution[index]].push({
        ...wordCard,
        onClick: () => {
          wordCard.onClick();
          setSelectedWordGroup(wordDistribution[index]);
        },
      });
    });

    const graphemeGroups: GraphemeCardProps[][] = [[], [], [], []];
    const graphemeDistribution = distribute(graphemeList);
    graphemeList.forEach((graphemeCard, index) => {
      graphemeGroups[graphemeDistribution[index]].push({
        ...graphemeCard,
        onClick: () => {
          graphemeCard.onClick();
          setSelectedGraphemeGroup(graphemeDistribution[index]);
        },
      });
    });

    return { wordGroups, graphemeGroups };
  }, [voice]); // do not add `play`, `showMeaning`

  const graphemeList = useMemo(
    () => graphemeGroups.map((list, index) => list[graphemeGroupIndex[index]]),
    [graphemeGroups, graphemeGroupIndex],
  );

  const wordList = useMemo(
    () => wordGroups.map((list, index) => list[wordGroupIndex[index]]),
    [wordGroups, wordGroupIndex],
  );

  useEffect(() => {
    if (
      selectedWord !== undefined &&
      selectedGrapheme !== undefined &&
      selectedGrapheme === selectedWord
    ) {
      setGraphemeGroupIndex((prev) => {
        if (
          graphemeGroups[selectedGraphemeGroup!].length ===
          prev[selectedGraphemeGroup!]
        ) {
          return prev;
        }
        const copy = [...prev];
        copy[selectedGraphemeGroup!] += 1;
        return copy;
      });
      setWordGroupIndex((prev) => {
        if (
          wordGroups[selectedWordGroup!].length === prev[selectedWordGroup!]
        ) {
          return prev;
        }
        const copy = [...prev];
        copy[selectedWordGroup!] += 1;
        return copy;
      });
      setSelectedWord(undefined);
      setSelectedGrapheme(undefined);
      setSelectedWordGroup(undefined);
      setSelectedGraphemeGroup(undefined);
    }
  }, [
    graphemeGroups,
    selectedGrapheme,
    selectedGraphemeGroup,
    selectedWord,
    selectedWordGroup,
    wordGroups,
  ]);

  return (
    <>
      <h1 className="text-center text-3xl lg:text-6xl font-doodle mb-3">
        {graphemeGroupIndex.reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        }, 0)}
        <span className="text-2xl lg:text-4xl ml-4">
          /
          {graphemeGroups.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.length;
          }, 0)}
        </span>
      </h1>

      <div className="flex flex-row mx-auto w-1/3">
        <div className="basis-1/2">
          {graphemeList.map((props, index) => {
            if (!props) {
              return (
                <div key={"grapheme" + index} className="h-40 grid">
                  OK
                </div>
              );
            }
            return (
              <div key={"grapheme" + index} className="h-40 grid">
                <GraphemeCard {...props} />
              </div>
            );
          })}
        </div>
        <div className="basis-1/2">
          {wordList.map((props, index) => {
            if (!props) {
              return (
                <div key={"grapheme" + index} className="h-40 grid">
                  OK
                </div>
              );
            }
            return (
              <div key={"word" + index} className="h-40 grid">
                <WordCard {...props} />
              </div>
            );
          })}
        </div>
      </div>
      {meaningContent}
    </>
  );
};

const shuffle = () => {
  return [0, 1, 2, 3].sort(() => Math.random() - 0.5);
};

const distribute = (list: WordCardProps[] | GraphemeCardProps[]) => {
  return Array(Math.ceil(list.length / 4))
    .fill(0)
    .flatMap(() => shuffle());
};

export default Page;
