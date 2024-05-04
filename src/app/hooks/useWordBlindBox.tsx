import { useMemo, useState } from "react";

import { WordCard, WordCardProps } from "@/app/components/WordCard";

type WordBlindBoxProps = {
  wordCardList: WordCardProps[];
  onClick: (boxIndex: number) => void;
  boxIndex: number;
};

const useWordBlindBox = ({
  wordCardList,
  onClick,
  boxIndex,
}: WordBlindBoxProps) => {
  const [wordIndex, setWordIndex] = useState(0);

  const wordCardProps = useMemo(
    () => wordCardList[wordIndex],
    [wordIndex, wordCardList],
  );

  const WordBlindBox = () => (
    <WordCard
      {...wordCardProps}
      onClick={() => {
        wordCardProps.onClick();
        onClick(boxIndex);
      }}
    />
  );

  return { WordBlindBox, setWordIndex };
};

export default useWordBlindBox;
