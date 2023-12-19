"use client";

import { usePronunciationSound } from "@/app/hooks/usePronunciationSound";
import Word from "@/app/components/Word";
import EasySpeech from "easy-speech";

export type ItemProps = {
  phoneme: string;
  grapheme: string;
  dict: any;
  speech: typeof EasySpeech;
};

export default function Item({ phoneme, grapheme, dict, speech }: ItemProps) {
  const { play, stop, isPlaying } = usePronunciationSound(phoneme);
  const words = dict
    ?.filter((item: any) => {
      let testGrapheme = item.word.includes(grapheme);
      if (grapheme.includes("_")) {
        const regex = new RegExp(grapheme.replace("_", "."), "gi");
        testGrapheme = regex.test(item.word);
      }

      return (
        testGrapheme &&
        item.american_phonetic.findIndex((phonetic: string) =>
          phonetic.includes(phoneme),
        ) !== -1
      );
    })
    .map((item: any) => item.word);
  if (words?.length > 10) words.length = 10;

  return (
    <div className="mb-4 rounded-2xl border-4 border-gray-800 border-dotted text-gray-950 flex">
      <div
        style={{ width: "200px" }}
        className="flex-none rounded-2xl border-r-4 border-gray-800 border-dotted transition duration-300 hover:bg-indigo-500 hover:text-white hover:border-white cursor-pointer"
        onClick={() => play()}
      >
        <div className="text-center leading-loose text-5xl font-doodle">
          {grapheme}
        </div>
        <div className="text-center mb-6 font-playpen">/{phoneme}/</div>
      </div>
      <div className="grow text-center mb-6 font-playpen text-3xl">
        {words?.map((word: string, index: number) => (
          <>
            <Word
              word={word}
              speech={speech}
              key={word + index + phoneme + grapheme}
            />
            {index !== words.length - 1 && ", "}
          </>
        ))}
      </div>
    </div>
  );
}
