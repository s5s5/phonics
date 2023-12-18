"use client";

import Item, { ItemProps } from "@/app/components/Item";

export type ListProps = {
  list: any[];
};

export default function List({ list }: ListProps) {
  return (
    <div className="grid grid-cols-4 gap-4 justify-center p-4">
      {list.map(({ phoneme, grapheme }: ItemProps, index) => (
        <Item
          phoneme={phoneme}
          grapheme={grapheme}
          key={phoneme + grapheme + index}
        />
      ))}
    </div>
  );
}
