import { useMemo } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

type GraphemeCardProps = {
  grapheme: string;
  pronunciation?: string;
  onClick: () => void;
  selected?: boolean;
  nodeRef?: React.RefObject<HTMLDivElement>;
};

const textSizes = [
  "text-5xl",
  "text-5xl",
  "text-4xl",
  "text-3xl",
  "text-2xl",
  "text-2xl",
];

const GraphemeCard = ({
  grapheme,
  pronunciation,
  onClick,
  selected,
  nodeRef,
}: GraphemeCardProps) => {
  const pronunciationText = useMemo(() => {
    if (!pronunciation) return null;
    if (!pronunciation.includes("_"))
      return <div className="text-center text-xs">/{pronunciation}/</div>;
    const [p1, p2] = pronunciation.split("_");
    return (
      <div className="text-center text-xs">
        /{p1}
        {<span className="italic">{p2}</span>}/
      </div>
    );
  }, [pronunciation]);

  return (
    <SwitchTransition>
      <CSSTransition
        key={grapheme}
        nodeRef={nodeRef}
        timeout={1000}
        classNames="item"
      >
        <div
          className={`m-1 rounded-xl border-2 border-gray-500 border-dashed transition duration-300 lg:hover:bg-indigo-500 lg:hover:text-white lg:hover:border-white cursor-pointer ${
            selected ? "bg-indigo-500 text-white border-transparent" : ""
          }`}
          onClick={onClick}
          ref={nodeRef}
        >
          <div className="h-12 overflow-visible mt-4 mb-1 text-center font-doodle flex content-center justify-items-center">
            <div className={`flex-1 text-center ${textSizes[grapheme.length]}`}>
              {grapheme}
            </div>
          </div>
          {pronunciationText}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export { GraphemeCard, type GraphemeCardProps };
