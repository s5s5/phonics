"use client";

import useSpeechSynthesis from "beautiful-react-hooks/useSpeechSynthesis";
import Image from "next/image";

export type WordProps = {
  word: string;
  voice: SpeechSynthesisVoice;
};

export default function Word({ word, voice }: WordProps) {
  const { speak } = useSpeechSynthesis(word, { voice, rate: 0.7 });

  return (
    <div
      className="m-1 rounded-xl border-4 border-gray-700 border-dotted transition duration-300 hover:bg-indigo-500 hover:text-white hover:border-white cursor-pointer"
      onClick={speak}
    >
      <Image
        className="mx-auto my-5"
        src={`/api/getPicUrl?word=${word}`}
        width={32}
        height={32}
        alt={word}
      />
      <div className="text-center mb-6 font-playpen text-xs">{word}</div>
    </div>
  );
}
