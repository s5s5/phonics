"use client";

import useSpeechSynthesis from "beautiful-react-hooks/useSpeechSynthesis";

export type WordProps = {
  word: string;
};

export default function Word({ word }: WordProps) {
  let voices: SpeechSynthesisVoice[] = [];
  if (typeof window !== "undefined") {
    voices = window.speechSynthesis.getVoices();
  }
  const { speak } = useSpeechSynthesis(word, { voice: voices[118], rate: 0.7 });

  return (
    <span className="cursor-pointer" onClick={speak}>
      {word}
    </span>
  );
}
