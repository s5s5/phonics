import { nanoid } from "nanoid";
import { useCallback, useEffect, useMemo, useState } from "react";

import { POS } from "@/app/constants";

const END_TIME = 5000;

const sliceMeaning = (meaning: string, pos: string) => {
  const clearMeaning = meaning.replaceAll(" ", "");
  const posIndex = clearMeaning.indexOf(pos);
  if (posIndex !== -1) {
    let first = clearMeaning.slice(0, posIndex);
    const second = clearMeaning.slice(posIndex + pos.length);

    return [{ w: first }, { w: pos, pos: true }, { w: second }];
  }
  return [{ w: clearMeaning }];
};

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

  const phoneticMain = useMemo(() => {
    const { american_phonetic } = wordObj;

    if (!american_phonetic) return null;
    const ap = american_phonetic.map((phonetic: string) => {
      return (
        <span className="mx-1" key={nanoid()}>
          /{phonetic}/
        </span>
      );
    });

    return <div>{ap}</div>;
  }, [wordObj]);

  const meaningMain = useMemo(() => {
    const { wordList, american_phonetic, chinese_meanings } = wordObj;
    if (!chinese_meanings) return "???";
    if (chinese_meanings.length === 0) return "???";

    const trimMeaning = (chinese_meanings[0] as string).trim();
    if (!trimMeaning) return "???";
    if (trimMeaning === "") return "???";

    let list: any[] = [];
    POS.map((pos) => {
      if (list.length === 0) {
        list = sliceMeaning(trimMeaning, pos);
      }

      const newList: any[] = [];
      list.map((item) => {
        if (item.pos) {
          newList.push(item);
        } else {
          newList.push(...sliceMeaning(item.w, pos));
        }
      });
      list = newList;
    });

    let list1 = list.filter(({ w }) => w !== "");
    const has8 = list1.findIndex((item) => !item.pos && item.w === "&");
    if (has8 !== -1) {
      const o = {
        pos: true,
        w: list1[has8 - 1].w + "&" + list1[has8 + 1].w,
      };
      list1 = [...list1.slice(0, has8 - 1), o, ...list1.slice(has8 + 1)];
    }

    const pairedArray = list1.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);

    return (
      <div className="text-base" key={nanoid()}>
        {pairedArray[0][1].w.replaceAll(",", "，")}
      </div>
    );
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
        {phoneticMain}
        {meaningMain}
      </div>
    );
  }, [meaningMain, phoneticMain, show, wordMain]);

  useEffect(() => {
    const id = setInterval(() => {
      hideMeaning();
    }, 1000) as unknown as number;
    return () => clearInterval(id);
  }, [hideMeaning]);

  return { meaningContent, showMeaning };
}
