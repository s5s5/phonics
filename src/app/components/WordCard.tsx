import useSpeechSynthesis from "beautiful-react-hooks/useSpeechSynthesis";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useMemo, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import useVoiceSelector from "@/app/hooks/useVoiceSelector";

type WordCardProps = {
  word: string;
  grapheme: string;
  onClick: () => void;
  selected?: boolean;
  nodeRef?: React.RefObject<HTMLDivElement>;
};

const WordCard = ({
  word,
  grapheme,
  onClick,
  selected,
  nodeRef,
}: WordCardProps) => {
  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  useVoiceSelector(setVoice);

  let speech = { speak: () => {} };
  if (
    typeof window !== "undefined" &&
    typeof window["speechSynthesis"] !== "undefined"
  ) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    speech = useSpeechSynthesis(word, { voice, rate: 0.7 });
  }
  const wordList = useMemo(() => splitWord(word, grapheme), [word, grapheme]);

  return (
    <SwitchTransition>
      <CSSTransition
        key={grapheme + word}
        nodeRef={nodeRef}
        timeout={1000}
        classNames="item"
      >
        <div
          className={`m-1 rounded-xl border-4 border-gray-300 border-dotted transition duration-300 lg:hover:bg-indigo-500 lg:hover:text-white lg:hover:border-white cursor-pointer ${
            selected ? "bg-indigo-500 text-white border-white" : ""
          }`}
          onClick={() => {
            speech.speak();
            onClick();
          }}
          ref={nodeRef}
        >
          <Image
            className="mx-auto my-1"
            src={`/images/words/${word}.png`}
            width={60}
            height={60}
            alt={word}
          />

          <div className="text-center mb-1 font-playpen text-base">
            {wordList.map(({ word, highLight }) => {
              if (highLight) {
                return (
                  <span
                    className="text-red-500 font-bold underline"
                    key={nanoid()}
                  >
                    {word}
                  </span>
                );
              }
              return <span key={nanoid()}>{word}</span>;
            })}
          </div>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

const splitWord = (
  word: string,
  grapheme: string,
): { word: string; highLight?: boolean }[] => {
  if (grapheme.includes("_")) {
    const regex = new RegExp(grapheme.replace("_", "."), "gi");
    const index = word.search(regex);
    const first = word.slice(0, index);
    let second = word.slice(index, index + grapheme.length);
    const end = word.slice(index + grapheme.length);
    const graphemes = grapheme.split("_");
    graphemes.forEach((g) => {
      second = second.replace(g, "");
    });
    return [
      { word: first },
      { word: graphemes[0], highLight: true },
      { word: second },
      { word: graphemes[1], highLight: true },
      { word: end },
    ];
  }

  const index = word.indexOf(grapheme);
  const first = word.slice(0, index);
  const second = word.slice(index + grapheme.length);
  return [
    { word: first },
    { word: grapheme, highLight: true },
    { word: second },
  ];
};

export { splitWord, WordCard, type WordCardProps };
