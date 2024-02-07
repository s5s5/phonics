import { useMemo, useState } from "react";

import Grapheme, { GraphemeType } from "@/app/components/Grapheme";

type GraphemeBlindBoxProps = {
  graphemeList: GraphemeType[];
  onClickGrapheme: Function;
  onClick: Function;
};

export default function GraphemeBlindBox({
  graphemeList: wordListProp,
  onClickGrapheme,
  onClick,
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
    onClick(obj);
    // setGraphemeIndex((prev) =>
    //   prev + 1 > graphemeList.length ? prev : prev + 1,
    // );
  };

  return (
    <Grapheme
      phoneme={phoneme}
      grapheme={grapheme}
      pronunciation={pronunciation}
      tips={tips}
      playSound={onClick0}
    />
  );
}
