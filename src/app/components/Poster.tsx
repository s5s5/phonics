import { useMemo } from "react";

import { GraphemeWithWords } from "@/app/components/GraphemeWithWords";
import { Navigation } from "@/app/components/Navigation";
import { splitWord } from "@/app/components/WordCard";
import { Phonics } from "@/app/constants";
import { CATEGORY_TO_SLUG } from "@/app/constants/categorySlug";
import { MeaningType } from "@/app/hooks/useMeaning";

type PosterProps = {
  phonicsList: Phonics[];
  navigationType: string;
  play: (phoneme: string) => void;
  showMeaning: (meaning: MeaningType) => void;
};

const Poster = ({ phonicsList, navigationType, play, showMeaning }: PosterProps) => {
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
          <div key={`${item.phoneme}-${item.grapheme}`}>
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
      <Navigation currentSlug={CATEGORY_TO_SLUG[navigationType]} />

      {cards}
    </>
  );
};

export { Poster };
