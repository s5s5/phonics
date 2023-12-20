"use client";

import useAudio from "beautiful-react-hooks/useAudio";

import Word from "@/app/components/Word";

export type ItemProps = any;

export default function Item({ item }: ItemProps) {
  const { phoneme, grapheme, words } = item;
  const [state, controls] = useAudio(`/audio/${phoneme}.mp3`);

  if (words?.length > 10) words.length = 10;

  return (
    <div className="mb-4 rounded-2xl border-4 border-gray-800 border-dotted text-gray-950 flex">
      <div
        style={{ width: "200px" }}
        className="flex-none rounded-2xl border-r-4 border-gray-800 border-dotted transition duration-300 hover:bg-indigo-500 hover:text-white hover:border-white cursor-pointer"
        onClick={controls.play}
      >
        <div className="text-center leading-loose text-5xl font-doodle">
          {grapheme}
        </div>
        <div className="text-center mb-6 font-playpen">/{phoneme}/</div>
      </div>
      <div className="grow text-center mb-6 font-playpen text-3xl">
        {words?.map((word: string, index: number) => (
          <>
            <Word word={word} key={word + index + phoneme + grapheme} />
            {index !== words.length - 1 && ", "}
          </>
        ))}
      </div>
    </div>
  );
}
