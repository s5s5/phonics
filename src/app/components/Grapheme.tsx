"use client";

import { useMemo } from "react";

export type GraphemeType = {
  phoneme: string;
  grapheme: string;
  pronunciation?: string;
  tips?: string;
};

type GraphemeProps = GraphemeType & {
  onClick: Function;
};

const textSizes = [
  "text-6xl",
  "text-6xl",
  "text-4xl",
  "text-3xl",
  "text-2xl",
  "text-2xl",
];

export default function Grapheme({
  phoneme,
  grapheme,
  pronunciation,
  tips,
  onClick,
}: GraphemeProps) {
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

  const meaning = useMemo(
    () =>
      tips
        ? { wordList: [{ word: grapheme }], chinese_meanings: tips }
        : { wordList: [{ word: grapheme }] },
    [grapheme, tips],
  );

  return (
    <div
      className="m-1 rounded-xl border-4 border-transparent transition duration-300 hover:bg-indigo-500 hover:text-white cursor-pointer"
      onClick={() => onClick({ grapheme, phoneme, meaning })}
    >
      <div className="h-16 overflow-visible mt-8 mb-2 text-center font-doodle flex content-center justify-items-center">
        <div className={`flex-1 text-center ${textSizes[grapheme.length]}`}>
          {grapheme}
        </div>
      </div>
      {pronunciationText}
    </div>
  );
}
