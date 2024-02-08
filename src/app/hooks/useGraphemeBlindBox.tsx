import { useMemo, useState } from "react";

import Grapheme, { GraphemeType } from "@/app/components/Grapheme";

type GraphemeBlindBoxProps = {
  graphemeList: GraphemeType[];
  onClickGrapheme: Function;
  onClick: Function;
  boxIndex: number;
};

export default function useGraphemeBlindBox({
  graphemeList: wordListProp,
  onClickGrapheme,
  onClick,
  boxIndex,
}: GraphemeBlindBoxProps) {
  const [graphemeList, setGraphemeList] =
    useState<GraphemeType[]>(wordListProp);
  const [graphemeIndex, setGraphemeIndex] = useState(0);

  const { phoneme, grapheme, pronunciation, tips } = useMemo(
    () => graphemeList[graphemeIndex],
    [graphemeIndex, graphemeList],
  );

  const onClick0 = (obj: any) => {
    onClickGrapheme(obj);
    onClick({ ...obj, boxIndex });
    // setGraphemeIndex((prev) =>
    //   prev + 1 > graphemeList.length ? prev : prev + 1,
    // );
  };

  const GraphemeBlindBox = () => (
    <Grapheme
      phoneme={phoneme}
      grapheme={grapheme}
      pronunciation={pronunciation}
      tips={tips}
      playSound={onClick0}
    />
  );

  return { GraphemeBlindBox, setGraphemeIndex };
}
