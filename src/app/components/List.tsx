"use client";

import Item, { ItemProps } from "@/app/components/Item";
import EasySpeech from "easy-speech";

export type ListProps = {
  list: any[];
  dict: any;
  speech: typeof EasySpeech;
};

export default function List({ list, dict, speech }: ListProps) {
  return (
    // <div className="grid grid-cols-4 gap-4 justify-center p-4">
    <div className=" p-4">
      {list.map(({ phoneme, grapheme }: ItemProps, index) => (
        <Item
          phoneme={phoneme}
          grapheme={grapheme}
          dict={dict}
          speech={speech}
          key={phoneme + grapheme + index}
        />
      ))}
    </div>
  );
}
