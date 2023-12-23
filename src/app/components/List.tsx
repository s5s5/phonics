"use client";

import { nanoid } from "nanoid";

import Item, { ItemProps } from "@/app/components/Item";
import useHowler from "@/app/hooks/useHowler";

export type ListProps = {
  list: any[];
  type: string;
  voice?: SpeechSynthesisVoice;
};

export default function List({ list, type, voice }: ListProps) {
  const filtered = list.filter((item) => item.graphemeType === type);
  const { play } = useHowler();

  return (
    <div className="p-1">
      {filtered.map((item: ItemProps) => (
        <Item item={item} play={play} voice={voice} key={nanoid()} />
      ))}
    </div>
  );
}
