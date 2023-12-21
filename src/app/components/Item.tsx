"use client";

import useAudio from "beautiful-react-hooks/useAudio";

import Word from "@/app/components/Word";

export type ItemProps = any;

export default function Item({ item, voice }: ItemProps) {
  const { phoneme, grapheme, words } = item;
  const [state, controls] = useAudio(`/audio/${phoneme}.mp3`);

  if (words?.length > 10) words.length = 10;

  return (
    <div className="mb-4 text-gray-950 grid grid-cols-4 md:grid-cols-11">
      <div
        className="m-1 transition duration-300 hover:bg-indigo-500 hover:text-white hover:border-white cursor-pointer"
        onClick={controls.play}
      >
        <div className="text-center text-2xl font-doodle h64 my-5">
          {grapheme}
        </div>
        <div className="text-center mb-6 font-playpen">/{phoneme}/</div>
      </div>
      {words?.map((word: string, index: number) => (
        <Word
          word={word}
          voice={voice}
          key={word + index + phoneme + grapheme}
        />
      ))}
    </div>
  );
}
