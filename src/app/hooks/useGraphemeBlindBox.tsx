import { useMemo, useState } from "react";

import { GraphemeCard, GraphemeCardProps } from "@/app/components/GraphemeCard";

type GraphemeBlindBoxProps = {
  graphemeCardList: GraphemeCardProps[];
  onClick: (boxIndex: number) => void;
  boxIndex: number;
};

const useGraphemeBlindBox = ({
  graphemeCardList,
  onClick,
  boxIndex,
}: GraphemeBlindBoxProps) => {
  const [graphemeIndex, setGraphemeIndex] = useState(0);

  const graphemeCardProps = useMemo(
    () => graphemeCardList[graphemeIndex],
    [graphemeIndex, graphemeCardList],
  );

  const GraphemeBlindBox = () => (
    <GraphemeCard
      {...graphemeCardProps}
      onClick={() => {
        graphemeCardProps.onClick();
        onClick(boxIndex);
      }}
    />
  );

  return { GraphemeBlindBox, setGraphemeIndex };
};

export default useGraphemeBlindBox;
