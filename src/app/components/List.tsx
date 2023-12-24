"use client";

import { nanoid } from "nanoid";
import { useMemo } from "react";

import Item, { ItemProps } from "@/app/components/Item";
import useHowler from "@/app/hooks/useHowler";

export type ListProps = {
  list: any[];
  type: string;
  voice?: SpeechSynthesisVoice;
  showMeaning: Function;
};

export default function List({ list, type, voice, showMeaning }: ListProps) {
  const { play } = useHowler();
  const content = useMemo(() => {
    const filtered = list.filter((item) => item.graphemeType === type);
    return filtered.map((item: ItemProps) => (
      <Item
        item={item}
        play={play}
        voice={voice}
        showMeaning={showMeaning}
        key={nanoid()}
      />
    ));
  }, [list, type, voice]);

  return <div className="p-1 content-visibility-auto">{content}</div>;
}
