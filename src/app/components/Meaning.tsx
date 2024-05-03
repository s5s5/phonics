import { nanoid } from "nanoid";
import React, { useEffect, useMemo, useRef, useState } from "react";

const END_TIME = 5000;

type MeaningType = {
  word?: string;
  wordList?: { word: string; highLight?: boolean }[];
  pronunciation?: (string | { style: string; text: string })[][];
  chinese_meanings?: string;
  boxIndex?: number;
};

const Meaning = ({ meaning }: { meaning: MeaningType }) => {
  const [show, setShow] = useState(false);

  const timerRef = useRef<number>();

  const wordMain = useMemo(() => {
    const { wordList } = meaning;
    if (!wordList) return null;
    const wl = wordList.map(({ word, highLight }) => {
      if (highLight) {
        return (
          <span className="text-red-500 font-bold underline" key={nanoid()}>
            {word}
          </span>
        );
      }
      return <span key={nanoid()}>{word}</span>;
    });
    return <div className="text-2xl font-playpen font-bold mx-1">{wl}</div>;
  }, [meaning]);

  const pronunciationMain = useMemo(() => {
    const { pronunciation } = meaning;

    if (!pronunciation) return null;
    const ap = pronunciation.map((phonetic) => {
      const phoneticElemnet = phonetic.map((p) => {
        if (typeof p === "object") {
          const className =
            p.style === "italic" ? "italic" : "font-bold underline";
          return (
            <span className={className} key={nanoid()}>
              {p.text}
            </span>
          );
        }
        return <span key={nanoid()}>{p}</span>;
      });
      return (
        <span className="mx-1 font-playpen text-xs" key={nanoid()}>
          /{phoneticElemnet}/
        </span>
      );
    });

    return <div>{ap}</div>;
  }, [meaning]);

  const meaningMain = useMemo(() => {
    const { chinese_meanings } = meaning;
    if (!chinese_meanings) return null;
    return <div className="mx-1">{chinese_meanings}</div>;
  }, [meaning]);

  useEffect(() => {
    if (show && timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    setShow(true);
    timerRef.current = window.setTimeout(() => {
      setShow(false);
    }, END_TIME);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [show]);

  return show ? (
    <div className="fixed z-20 bottom-1/2 left-1 right-1 rounded pt-1 pb-2 bg-gray-950/75 text-white text-center">
      {wordMain}
      {pronunciationMain}
      {meaningMain}
    </div>
  ) : null;
};

export { Meaning, type MeaningType };
