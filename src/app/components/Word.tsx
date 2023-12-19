"use client";

import EasySpeech from "easy-speech";

export type WordProps = {
  word: string;
  speech: typeof EasySpeech;
};

export default function Word({ word, speech }: WordProps) {
  return (
    <span
      className="cursor-pointer"
      onClick={async () => {
        await speech.speak({
          text: word,
          // voice: {}, // optional, will use a default or fallback
          pitch: 1,
          rate: 0.5,
          volume: 1,
          // there are more events, see the API for supported events
          boundary: (e) => console.debug("boundary reached"),
        });
      }}
    >
      {word}
    </span>
  );
}
