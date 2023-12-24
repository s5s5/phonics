import { nanoid } from "nanoid";
import { useCallback, useEffect, useMemo, useState } from "react";

import { POS } from "@/app/constants";

const END_TIME = 5000;

const sliceMeaning = (meaning: string, pos: string) => {
  const posIndex = meaning.indexOf(pos);
  if (posIndex !== -1) {
    let first = meaning.slice(0, posIndex);
    const second = meaning.slice(posIndex + pos.length);

    return [{ w: first }, { w: pos, pos: true }, { w: second }];
  }
  return [{ w: meaning }];
};

export default function useMeaning() {
  const [meaning, setMeaning] = useState("");
  const [show, setShow] = useState(false);
  const [endTime, setEndTime] = useState(Date.now() + END_TIME);

  const meaningMain = useMemo(() => {
    if (!meaning) return "???";
    if (meaning.length === 0) return "???";

    const trimMeaning = (meaning[0] as string).trim();
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

    const pairedArray = list
      .filter(({ w }) => w !== "")
      .reduce((result, value, index, array) => {
        if (index % 2 === 0) {
          result.push(array.slice(index, index + 2));
        }
        return result;
      }, []);

    return <div key={nanoid()}>{pairedArray[0][1].w.replace(",", "，")}</div>;
  }, [meaning]);

  const showMeaning = useCallback((word: string) => {
    setEndTime(Date.now() + END_TIME);
    setShow(true);
    setMeaning(word);
  }, []);

  const hideMeaning = useCallback(() => {
    Date.now() - endTime > 0 && setShow(false);
  }, [endTime]);

  const meaningContent = useMemo(() => {
    if (!show) return null;
    return (
      <div className="fixed z-20 bottom-20 left-1 right-1 rounded p-1 bg-gray-950/50 text-white text-xs text-center">
        {meaningMain}
      </div>
    );
  }, [meaningMain, show]);

  useEffect(() => {
    const id = setInterval(() => {
      hideMeaning();
    }, 1000) as unknown as number;
    return () => clearInterval(id);
  }, [hideMeaning]);

  return { meaningContent, showMeaning };
}
