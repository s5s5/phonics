import { nanoid } from "nanoid";
import { useCallback, useEffect, useMemo, useState } from "react";

import { POS } from "@/app/constants";

const END_TIME = 5000;

export default function useMeaning() {
  const [wordObj, setWordObj] = useState<any>({});
  const [show, setShow] = useState(false);
  const [endTime, setEndTime] = useState(Date.now() + END_TIME);

  const wordMain = useMemo(() => {
    const { wordList } = wordObj;
    if (!wordList) return null;
    const wl = wordList.map(({ word, highLight }: any) => {
      if (highLight) {
        return (
          <span className="text-red-500" key={nanoid()}>
            {word}
          </span>
        );
      }
      return <span key={nanoid()}>{word}</span>;
    });
    return <div className="text-2xl font-playpen font-bold">{wl}</div>;
  }, [wordObj]);

  const pronunciationMain = useMemo(() => {
    const { pronunciation } = wordObj;

    if (!pronunciation) return null;
    const ap = pronunciation.map((phonetic: any) => {
      const phoneticElemnet = phonetic.map((p) => {
        if (typeof p === "object") {
          const className = p.style === "italic" ? "italic" : "font-bold";
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
  }, [wordObj]);

  const meaningMain = useMemo(() => {
    const { chinese_meanings } = wordObj;
    if (!chinese_meanings) return null;
    return <div>{chinese_meanings}</div>;
  }, [wordObj]);

  const showMeaning = useCallback((wordObj: any) => {
    setEndTime(Date.now() + END_TIME);
    setShow(true);
    setWordObj(wordObj);
  }, []);

  const hideMeaning = useCallback(() => {
    Date.now() - endTime > 0 && setShow(false);
  }, [endTime]);

  const meaningContent = useMemo(() => {
    if (!show) return null;
    return (
      <div className="fixed z-20 bottom-20 left-1 right-1 rounded p-1 bg-gray-950/75 text-white text-center">
        {wordMain}
        {pronunciationMain}
        {meaningMain}
      </div>
    );
  }, [meaningMain, pronunciationMain, show, wordMain]);

  useEffect(() => {
    const id = setInterval(() => {
      hideMeaning();
    }, 1000) as unknown as number;
    return () => clearInterval(id);
  }, [hideMeaning]);

  return { meaningContent, showMeaning };
}
