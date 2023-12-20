"use client";

import Item, { ItemProps } from "@/app/components/Item";

export type ListProps = {
  list: any[];
  type: string;
};

export default function List({ list, type }: ListProps) {
  const filtered = list.filter((item) => item.graphemeType === type);
  console.log("filtered", filtered);

  return (
    // <div className="grid grid-cols-4 gap-4 justify-center p-4">
    <div className=" p-4">
      {filtered.map((item: ItemProps, index) => (
        <Item item={item} key={type + index} />
      ))}
    </div>
  );
}
