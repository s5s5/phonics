"use client";

import Item, { ItemProps } from "@/app/components/Item";

export type ListProps = {
  list: any[];
  type: string;
  voice?: SpeechSynthesisVoice;
};

export default function List({ list, type, voice }: ListProps) {
  const filtered = list.filter((item) => item.graphemeType === type);

  return (
    <div className="p-1">
      {filtered.map((item: ItemProps, index) => (
        <Item item={item} voice={voice} key={type + index} />
      ))}
    </div>
  );
}
