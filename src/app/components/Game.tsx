import { useEffect, useMemo, useState } from "react";

import { GraphemeCard, GraphemeCardProps } from "@/app/components/GraphemeCard";
import { splitWord, WordCard, WordCardProps } from "@/app/components/WordCard";
import { Phonics } from "@/app/constants/list";
import { MeaningType } from "@/app/hooks/useMeaning";

const PHONICS_DISPLAY_LIMIT = 28;

type GameProps = {
  phonicsList: Phonics[];
  play: (phoneme: string) => void;
  showMeaning: (meaning: MeaningType) => void;
};

const Game = ({ phonicsList, play, showMeaning }: GameProps) => {
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

  const [resetCount, setResetCount] = useState(0);

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
  }, [resetCount]); // do not add `play`, `showMeaning`

  const graphemeList = useMemo(
    () => graphemeGroups.map((list, index) => list[graphemeGroupIndex[index]]),
    [graphemeGroups, graphemeGroupIndex],
  );

  const wordList = useMemo(
    () => wordGroups.map((list, index) => list[wordGroupIndex[index]]),
    [wordGroups, wordGroupIndex],
  );

  const completedCount = useMemo(
    () =>
      graphemeGroupIndex.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      }, 0),
    [graphemeGroupIndex],
  );

  const totalCount = useMemo(
    () =>
      graphemeGroups.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.length;
      }, 0),
    [graphemeGroups],
  );

  const progress = useMemo(
    () =>
      completedCount === 0 ? "1%" : `${(completedCount / totalCount) * 100}%`,
    [completedCount, totalCount],
  );

  const resetGame = () => {
    setGraphemeGroupIndex([0, 0, 0, 0]);
    setWordGroupIndex([0, 0, 0, 0]);
    setSelectedWord(undefined);
    setSelectedGrapheme(undefined);
    setSelectedWordGroup(undefined);
    setSelectedGraphemeGroup(undefined);
    setResetCount((prev) => prev + 1);
  };

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
      <div className="bg-transparent relative my-2 border-4 border-gray-300 border-dotted">
        <div
          className="bg-yellow-400 absolute top-0 left-0 bottom-0"
          style={{ width: progress }}
        ></div>
        <div className="text-center text-2xl lg:text-4xl font-doodle relative">
          {completedCount}
          <span className="text-xl lg:text-2xl ml-4">/{totalCount}</span>
        </div>
      </div>

      {completedCount === totalCount && (
        <div className="text-center pb-96">
          <h3 className="text-2xl lg:text-4xl font-doodle my-16">
            🎉 Congratulations! 🎉
          </h3>
          <button
            className="font-doodle text-3xl p-3 rounded-xl border-4 border-gray-800 border-dotted transition duration-300 hover:bg-indigo-500 hover:text-white hover:border-white cursor-pointer"
            onClick={resetGame}
          >
            Restart
          </button>
        </div>
      )}

      {completedCount < totalCount && (
        <div className="flex flex-row gap-x-5 mx-auto lg:w-1/3">
          <div className="basis-1/2">
            {graphemeList.map((props, index) => {
              if (!props) {
                return (
                  <div key={"grapheme" + index} className="h-40 grid"></div>
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
                  <div key={"grapheme" + index} className="h-40 grid"></div>
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
      )}
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

export { Game };
