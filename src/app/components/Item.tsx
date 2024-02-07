"use client";

import { nanoid } from "nanoid";
import { useCallback, useMemo } from "react";

import Grapheme from "@/app/components/Grapheme";
import Word from "@/app/components/Word";
import { MeaningType } from "@/app/hooks/useMeaning";

export type ItemProps = any;

export default function Item({ item, play, voice, showMeaning }: ItemProps) {
  const { phoneme, grapheme, pronunciation, words, tips } = item;

  const content = useMemo(
    () =>
      words?.map((word: any) => (
        <Word
          wordInfo={word}
          voice={voice}
          grapheme={grapheme}
          playSound={showMeaning}
          key={nanoid()}
        />
      )),
    [words, voice, grapheme, showMeaning],
  );

  const onClickGrapheme = useCallback(
    ({ phoneme, meaning }: { phoneme: string; meaning: MeaningType }) => {
      play(phoneme);
      showMeaning(meaning);
    },
    [play, showMeaning],
  );

  return (
    <div className="mb-4 text-gray-950 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 content-visibility-auto">
      <Grapheme
        phoneme={phoneme}
        grapheme={grapheme}
        pronunciation={pronunciation}
        tips={tips}
        playSound={onClickGrapheme}
      />
      {content}
    </div>
  );
}
