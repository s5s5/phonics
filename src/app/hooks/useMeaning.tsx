import { useCallback, useEffect, useMemo, useState } from "react";

const END_TIME = 3000;

type MeaningType = {
  word?: string;
  wordList?: { word: string; highLight?: boolean }[];
  pronunciation?: (string | { style: string; text: string })[][];
  chinese_meanings?: string;
  boxIndex?: number;
};

const useMeaning = () => {
  const [meaning, setMeaning] = useState<MeaningType>({});
  const [show, setShow] = useState(false);

  const wordMain = useMemo(() => {
    const { wordList } = meaning;
    if (!wordList) return null;
    const wordElements = wordList.map(({ word, highLight }, index) => {
      if (highLight) {
        return (
          <span className="text-red-500 font-bold underline" key={index}>
            {word}
          </span>
        );
      }
      return <span key={index}>{word}</span>;
    });
    return (
      <div className="text-2xl font-playpen font-bold mx-1">{wordElements}</div>
    );
  }, [meaning]);

  const pronunciationMain = useMemo(() => {
    const { pronunciation } = meaning;

    if (!pronunciation) return null;
    const phoneticElements = pronunciation.map((phonetic, phoneticIndex) => {
      const phoneticElemnet = phonetic.map((phoneticItem, itemIndex) => {
        if (typeof phoneticItem === "object") {
          const className =
            phoneticItem.style === "italic" ? "italic" : "font-bold underline";
          return (
            <span className={className} key={itemIndex}>
              {phoneticItem.text}
            </span>
          );
        }
        return <span key={itemIndex}>{phoneticItem}</span>;
      });
      return (
        <span className="mx-1 font-playpen text-xs" key={phoneticIndex}>
          /{phoneticElemnet}/
        </span>
      );
    });

    return <div>{phoneticElements}</div>;
  }, [meaning]);

  const meaningMain = useMemo(() => {
    const { chinese_meanings } = meaning;
    if (!chinese_meanings) return null;
    return <div className="mx-1">{chinese_meanings}</div>;
  }, [meaning]);

  const showMeaning = useCallback((meaning: MeaningType) => {
    setShow(true);
    setMeaning(meaning);
  }, []);

  const meaningContent = useMemo(() => {
    if (!show) return null;
    return (
      <div className="fixed z-20 bottom-1 left-1 right-1 rounded pt-1 pb-2 bg-gray-950/75 text-white text-center">
        {wordMain}
        {pronunciationMain}
        {meaningMain}
      </div>
    );
  }, [meaningMain, pronunciationMain, show, wordMain]);

  useEffect(() => {
    if (!show) return;
    const id = window.setTimeout(() => setShow(false), END_TIME);
    return () => window.clearTimeout(id);
  }, [show, meaning]);

  return { meaningContent, showMeaning };
};

export default useMeaning;
export { type MeaningType };
