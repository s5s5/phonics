"use client";

import { usePronunciationSound } from "@/app/hooks/usePronunciationSound";
import Image from "next/image";

export type ItemProps = {
  phoneme: string;
  grapheme: string;
};

export default function Item({ phoneme, grapheme }: ItemProps) {
  const word = phoneme !== "" ? phoneme : "k";
  const { play, stop, isPlaying } = usePronunciationSound(word);

  return (
    <div
      className="rounded-3xl border-4 border-slate text-gray-950 cursor-pointer transition duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-white hover:border-white"
      onClick={() => play()}
    >
      {/*<Image*/}
      {/*  src={`/api/getPicUrl?word=${phoneme}`}*/}
      {/*  alt={phoneme}*/}
      {/*  width={32}*/}
      {/*  height={32}*/}
      {/*  priority*/}
      {/*/>*/}
      <div className="text-center leading-loose text-9xl">{grapheme}</div>
      <div className="text-center mb-10">/{phoneme}/</div>
    </div>
  );
}
