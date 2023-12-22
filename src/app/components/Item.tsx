"use client";

import useThrottledCallback from "beautiful-react-hooks/useThrottledCallback";
import { nanoid } from "nanoid";

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

export default function Item({ item, voice, play }: ItemProps) {
  const { phoneme, grapheme, words } = item;

  const playPhoneme = useThrottledCallback(play, [], 500);

  if (words?.length > 10) words.length = 10;

  return (
    <div className="mb-4 text-gray-950 grid grid-cols-4 md:grid-cols-11">
      <div
        className="m-1 rounded-xl border-4 border-transparent transition duration-300 hover:bg-indigo-500 hover:text-white cursor-pointer"
        onClick={() => {
          playPhoneme(phoneme);
        }}
      >
        <div className="h-16 overflow-visible mt-3 mb-4 text-center font-doodle flex content-center justify-items-center">
          <div className={`flex-1 text-center ${textSizes[grapheme.length]}`}>
            {grapheme}
          </div>
        </div>
        <div className="text-center text-xs mb-6 font-playpen">/{phoneme}/</div>
      </div>
      {words?.map((word: string, index: number) => (
        <Word word={word} voice={voice} grapheme={grapheme} key={nanoid()} />
      ))}
    </div>
  );
}
