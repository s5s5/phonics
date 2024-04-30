"use client";

import useSpeechSynthesis from "beautiful-react-hooks/useSpeechSynthesis";
import { nanoid } from "nanoid";
import { useMemo, useState } from "react";

import { GraphemeWithWords } from "@/app/components/GraphemeWithWords";
import { VoiceSelector } from "@/app/components/VoiceSelector";
import { splitWord } from "@/app/components/WordCard";
import { PHONICS_LIST } from "@/app/constants/list";
import useHowler from "@/app/hooks/useHowler";
import useMeaning from "@/app/hooks/useMeaning";

const Page = () => {
  const { play } = useHowler();
  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const { meaningContent, showMeaning } = useMeaning();

  const list = useMemo(() => {
    return PHONICS_LIST.map((item) => {
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
  }, [play, showMeaning, voice]);

  return (
    <>
      {list}
      <div className="text-center text-xs font-playpen content-visibility-auto">
        <div className="font-doodle text-xl">Thanks</div>
        <a
          href="https://www.flaticon.com/free-stickers/speech"
          title="speech stickers"
          target="_blank"
        >
          All stickers created by Gohsantosadrive - Flaticon
        </a>
        <div className="mt-3">
          <VoiceSelector onVoiceChange={setVoice} />
        </div>
        <div className="font-doodle text-xl">Contact</div>
        <a href="mailto:s5s5cn@gmail.com">s5s5cn@gmail.com</a>
      </div>
      {meaningContent}
    </>
  );
};

export default Page;
