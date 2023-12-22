"use client";

import { nanoid } from "nanoid";

import Item, { ItemProps } from "@/app/components/Item";

export type ListProps = {
  list: any[];
  type: string;
  voice?: SpeechSynthesisVoice;
  play?: Function;
};

export default function List({ list, type, voice, play }: ListProps) {
  const filtered = list.filter((item) => item.graphemeType === type);

  return (
    <div className="p-1">
      {filtered.map((item: ItemProps, index) => (
        <Item item={item} voice={voice} play={play} key={nanoid()} />
      ))}
    </div>
  );
}
