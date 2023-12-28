"use client";

import { nanoid } from "nanoid";
import { useMemo } from "react";

import Word from "@/app/components/Word";

export type ItemProps = any;

const textSizes = [
  "text-6xl",
  "text-6xl",
  "text-4xl",
  "text-3xl",
  "text-2xl",
  "text-2xl",
];

export default function Item({ item, play, voice, showMeaning }: ItemProps) {
  const { phoneme, grapheme, pronunciation, words, tips } = item;

  const content = useMemo(
    () =>
      words?.map((word: any) => (
        <Word
          wordObj={word}
          voice={voice}
          grapheme={grapheme}
          showMeaning={showMeaning}
          key={nanoid()}
        />
      )),
    [words, voice, grapheme],
  );

  const pronunciationText = useMemo(() => {
    if (!pronunciation) return null;
    if (!pronunciation.includes("_"))
      return <div className="text-center text-xs">/{pronunciation}/</div>;
    const [p1, p2] = pronunciation.split("_");
    return (
      <div className="text-center text-xs">
        /{p1}
        {<span className="italic">{p2}</span>}/
      </div>
    );
  }, [pronunciation]);

  return (
    <div className="mb-4 text-gray-950 grid grid-cols-4 lg:grid-cols-11 content-visibility-auto">
      <div
        className="m-1 rounded-xl border-4 border-transparent transition duration-300 hover:bg-indigo-500 hover:text-white cursor-pointer"
        onClick={() => {
          play(phoneme);
          showMeaning(
            tips
              ? { wordList: [{ word: grapheme }], chinese_meanings: tips }
              : { wordList: [{ word: grapheme }] },
          );
        }}
      >
        <div className="h-16 overflow-visible mt-8 mb-2 text-center font-doodle flex content-center justify-items-center">
          <div className={`flex-1 text-center ${textSizes[grapheme.length]}`}>
            {grapheme}
          </div>
        </div>
        {pronunciationText}
      </div>
      {content}
    </div>
  );
}
