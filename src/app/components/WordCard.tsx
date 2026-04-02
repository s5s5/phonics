import Image from "next/image";
import { memo, useCallback, useMemo, useState } from "react";
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
  const [imgError, setImgError] = useState(false);

  useVoiceSelector(setVoice);

  const speak = useCallback(() => {
    if (typeof speechSynthesis === "undefined") return;
    const utter = new SpeechSynthesisUtterance(word);
    if (voice) {
      utter.voice = voice;
      utter.rate = 0.7;
    }
    speechSynthesis.speak(utter);
  }, [word, voice]);

  const wordList = useMemo(() => splitWord(word, grapheme), [word, grapheme]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      speak();
      onClick();
    }
  };

  return (
    <SwitchTransition>
      <CSSTransition
        key={grapheme + word}
        nodeRef={nodeRef}
        timeout={1000}
        classNames="item"
      >
        <div
          role="button"
          tabIndex={0}
          aria-label={`Word ${word}`}
          aria-pressed={selected}
          className={`m-1 rounded-xl border-4 border-gray-300 border-dotted transition duration-300 lg:hover:bg-indigo-500 lg:hover:text-white lg:hover:border-white cursor-pointer ${
            selected ? "bg-indigo-500 text-white border-white" : ""
          }`}
          onClick={() => {
            speak();
            onClick();
          }}
          onKeyDown={handleKeyDown}
          ref={nodeRef}
        >
          {imgError ? (
            <div className="mx-auto my-1 h-[60px] flex items-center justify-center text-gray-400 text-sm">
              {word}
            </div>
          ) : (
            <Image
              className="mx-auto my-1"
              src={`/images/words/${word}.png`}
              width={60}
              height={60}
              alt={word}
              onError={() => setImgError(true)}
            />
          )}

          <div className="text-center mb-1 font-playpen text-base">
            {wordList.map(({ word, highLight }, index) => {
              if (highLight) {
                return (
                  <span
                    className="text-red-500 font-bold underline"
                    key={index}
                  >
                    {word}
                  </span>
                );
              }
              return <span key={index}>{word}</span>;
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

const MemoWordCard = memo(WordCard);
export { splitWord, MemoWordCard as WordCard, type WordCardProps };
