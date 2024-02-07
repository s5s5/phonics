import { useMemo, useState } from "react";

import Word, { WordProps } from "@/app/components/Word";

type WordBlindBoxProps = {
  wordList: WordProps[];
  voice?: SpeechSynthesisVoice;
  onClick: Function;
};

export default function useWordBlindBox({
  wordList: wordListProp,
  voice,
  onClick,
}: WordBlindBoxProps) {
  const [wordList, setWordList] = useState<WordProps[]>(wordListProp);
  const [wordIndex, setWordIndex] = useState(0);

  const { wordInfo, grapheme } = useMemo(
    () => wordList[wordIndex],
    [wordIndex, wordList],
  );

  const onClickWord = (obj: any) => {
    onClick(obj);
    // setWordIndex((prev) => (prev + 1 > wordList.length ? prev : prev + 1));
  };

  const WordBlindBox = () => (
    <Word
      wordInfo={wordInfo}
      grapheme={grapheme}
      voice={voice}
      playSound={onClickWord}
    />
  );

  return { WordBlindBox, setWordIndex };
}
