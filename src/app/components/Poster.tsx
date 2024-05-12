import { nanoid } from "nanoid";
import { useMemo, useState } from "react";

import { GraphemeWithWords } from "@/app/components/GraphemeWithWords";
import { Navigation, navigationTypes } from "@/app/components/Navigation";
import { splitWord } from "@/app/components/WordCard";
import { Phonics } from "@/app/constants/list";
import { MeaningType } from "@/app/hooks/useMeaning";

type PosterProps = {
  phonicsList: Phonics[];
  play: (phoneme: string) => void;
  showMeaning: (meaning: MeaningType) => void;
  voice?: SpeechSynthesisVoice;
};

const Poster = ({ phonicsList, play, showMeaning, voice }: PosterProps) => {
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
            voice,
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
  }, [navigationType, voice]); // do not add `play`, `showMeaning`

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
