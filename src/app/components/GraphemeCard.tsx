import { useMemo } from "react";

type GraphemeCardProps = {
  grapheme: string;
  pronunciation?: string;
  onClick: () => void;
  selected?: boolean;
};

const textSizes = [
  "text-6xl",
  "text-6xl",
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
    <div
      className={`${
        selected ? "bg-indigo-500 text-white border-white" : ""
      } m-1 rounded-xl border-4 border-gray-800 border-dotted transition duration-300 lg:hover:bg-indigo-500 lg:hover:text-white lg:hover:border-white cursor-pointer`}
      onClick={onClick}
    >
      <div className="h-16 overflow-visible mt-8 mb-2 text-center font-doodle flex content-center justify-items-center">
        <div className={`flex-1 text-center ${textSizes[grapheme.length]}`}>
          {grapheme}
        </div>
      </div>
      {pronunciationText}
    </div>
  );
};

export { GraphemeCard, type GraphemeCardProps };
