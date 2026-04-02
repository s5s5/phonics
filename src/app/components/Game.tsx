import { motion } from "framer-motion";
import { createRef, useEffect, useMemo } from "react";
import { Client } from "react-hydration-provider";

import { GraphemeCard, GraphemeCardProps } from "@/app/components/GraphemeCard";
import { Line } from "@/app/components/Line";
import { splitWord, WordCard, WordCardProps } from "@/app/components/WordCard";
import { Phonics } from "@/app/constants";
import { MeaningType } from "@/app/hooks/useMeaning";
import { useGameStore } from "@/app/store/gameStore";

const PHONICS_DISPLAY_LIMIT = 16;

type GameProps = {
  phonicsList: Phonics[];
  play: (phoneme: string) => void;
  showMeaning: (meaning: MeaningType) => void;
};

const Game = ({ phonicsList, play, showMeaning }: GameProps) => {
  const {
    selectedWord,
    selectedGrapheme,
    selectedWordGroup,
    selectedGraphemeGroup,
    wordGroupIndex,
    graphemeGroupIndex,
    resetCount,
    selectWord,
    selectGrapheme,
    advanceGroups,
    reset,
  } = useGameStore();

  const { wordGroups, graphemeGroups } = useMemo(() => {
    const wordList: WordCardProps[] = [];
    const graphemeList: GraphemeCardProps[] = [];
    const list = [...phonicsList];
    list
      .sort(() => 0.5 - Math.random())
      .slice(0, PHONICS_DISPLAY_LIMIT)
      .map(({ phoneme, grapheme, pronunciation, tips, words }) => {
        const word = words[Math.floor(Math.random() * words.length)];
        wordList.push({
          grapheme,
          word: word.word,
          onClick: () => {
            showMeaning({
              word: word.word,
              pronunciation: word.pronunciation,
              chinese_meanings: word.chinese_meanings,
              wordList: splitWord(word.word, grapheme),
            });
          },
          nodeRef: createRef() as React.RefObject<HTMLDivElement>,
        });
        graphemeList.push({
          grapheme,
          pronunciation,
          onClick: () => {
            play(phoneme);
            showMeaning({
              wordList: [{ word: grapheme }],
              chinese_meanings: tips,
            });
          },
          nodeRef: createRef() as React.RefObject<HTMLDivElement>,
        });
      });

    const wordGroups: WordCardProps[][] = [[], [], [], []];
    const wordDistribution = distribute(wordList);
    wordList.forEach((wordCard, index) => {
      wordGroups[wordDistribution[index]].push({
        ...wordCard,
        onClick: () => {
          wordCard.onClick();
          selectWord(wordCard.grapheme, wordDistribution[index]);
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
          selectGrapheme(graphemeCard.grapheme, graphemeDistribution[index]);
        },
      });
    });

    return { wordGroups, graphemeGroups };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetCount]); // do not add `play`, `showMeaning`, `selectWord`, `selectGrapheme`

  const graphemeList = useMemo(
    () => graphemeGroups.map((list, index) => list[graphemeGroupIndex[index]]),
    [graphemeGroups, graphemeGroupIndex],
  );

  const wordList = useMemo(
    () => wordGroups.map((list, index) => list[wordGroupIndex[index]]),
    [wordGroups, wordGroupIndex],
  );

  const completedCount = useMemo(
    () => graphemeGroupIndex.reduce((sum, val) => sum + val, 0),
    [graphemeGroupIndex],
  );

  const totalCount = useMemo(
    () => graphemeGroups.reduce((sum, g) => sum + g.length, 0),
    [graphemeGroups],
  );

  const progress = useMemo(
    () =>
      completedCount === 0 ? "1%" : `${(completedCount / totalCount) * 100}%`,
    [completedCount, totalCount],
  );

  useEffect(() => {
    if (
      selectedWord !== undefined &&
      selectedGrapheme !== undefined &&
      selectedGrapheme === selectedWord
    ) {
      advanceGroups(
        wordGroups.map((g) => g.length),
        graphemeGroups.map((g) => g.length),
      );
    }
  }, [
    advanceGroups,
    graphemeGroups,
    selectedGrapheme,
    selectedWord,
    wordGroups,
  ]);

  return (
    <>
      <div className="bg-transparent relative my-2 border-4 border-gray-300 border-dotted">
        <motion.div
          className="bg-yellow-400 absolute top-0 left-0 bottom-0"
          animate={{ width: progress }}
        />
        <div className="text-center text-2xl lg:text-4xl font-doodle relative">
          {completedCount}
          <span className="text-xl lg:text-2xl ml-4">/{totalCount}</span>
        </div>
      </div>

      {completedCount === totalCount && (
        <div className="text-center pb-96">
          <motion.h3
            className="text-2xl lg:text-4xl font-doodle my-16"
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            🎉 Congratulations! 🎉
          </motion.h3>
          <motion.button
            className="font-doodle text-3xl p-3 rounded-xl border-4 border-gray-800 border-dotted transition duration-300 hover:bg-indigo-500 hover:text-white hover:border-white cursor-pointer"
            onClick={reset}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse" }}
          >
            PLAY AGAIN
          </motion.button>
        </div>
      )}

      {completedCount < totalCount && (
        <Client>
          <div className="flex flex-row gap-x-5 mx-auto relative lg:w-1/3">
            <Line
              from={selectedGraphemeGroup}
              to={selectedWordGroup}
              completedCount={completedCount}
            />
            <div className="basis-1/2 relative">
              {graphemeList.map((props, index) => {
                if (!props) {
                  return (
                    <div key={"grapheme" + index} className="h-28 grid"></div>
                  );
                }
                return (
                  <div key={"grapheme" + index} className="h-28 grid">
                    <GraphemeCard
                      {...props}
                      selected={props.grapheme === selectedGrapheme}
                    />
                  </div>
                );
              })}
            </div>
            <div className="basis-1/2 relative">
              {wordList.map((props, index) => {
                if (!props) {
                  return (
                    <div key={"grapheme" + index} className="h-28 grid"></div>
                  );
                }
                return (
                  <div key={"word" + index} className="h-28 grid">
                    <WordCard
                      {...props}
                      selected={props.grapheme === selectedWord}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Client>
      )}
    </>
  );
};

// Fisher-Yates shuffle for uniform distribution
const shuffle = () => {
  const arr = [0, 1, 2, 3];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const distribute = (list: WordCardProps[] | GraphemeCardProps[]) => {
  return Array(Math.ceil(list.length / 4))
    .fill(0)
    .flatMap(() => shuffle());
};

export { Game };
