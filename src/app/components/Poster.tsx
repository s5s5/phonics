import { nanoid } from "nanoid";
import { useMemo, useState } from "react";

import { GraphemeWithWords } from "@/app/components/GraphemeWithWords";
import { Navigation, navigationTypes } from "@/app/components/Navigation";
import { splitWord } from "@/app/components/WordCard";
import { Phonics } from "@/app/constants";
import { MeaningType } from "@/app/hooks/useMeaning";

type PosterProps = {
  phonicsList: Phonics[];
  play: (phoneme: string) => void;
  showMeaning: (meaning: MeaningType) => void;
};

const Poster = ({ phonicsList, play, showMeaning }: PosterProps) => {
  const [navigationType, setNavigationType] = useState(navigationTypes[0]);

  const cards = useMemo(() => {
    return phonicsList
      .filter(({ graphemeType }) => graphemeType === navigationType)
      .map((item) => {
        const { phoneme, grapheme, pronunciation, words, tips } = item;
        const graphemeCard = {
          grapheme,
          pronunciation,
          onClick: () => {
            play(phoneme);
            showMeaning({
              wordList: [{ word: grapheme }],
              chinese_meanings: tips,
            });
          },
        };

        const wordCards = words.map((word) => {
          return {
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
          };
        });

        return (
          <div key={nanoid()}>
            <GraphemeWithWords
              graphemeCard={graphemeCard}
              wordCards={wordCards}
            />
          </div>
        );
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigationType]); // do not add `play`, `showMeaning`

  return (
    <>
      <Navigation
        navigationType={navigationType}
        setNavigationType={setNavigationType}
      />

      {cards}
    </>
  );
};

export { Poster };
