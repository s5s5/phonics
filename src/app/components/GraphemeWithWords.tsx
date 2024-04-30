import { nanoid } from "nanoid";

import { GraphemeCard, GraphemeCardProps } from "@/app/components/Grapheme2";
import { WordCard, WordCardProps } from "@/app/components/WordCard";

type GraphemeWithWordsProps = {
  graphemeCard: GraphemeCardProps;
  wordCards: WordCardProps[];
};

const GraphemeWithWords = ({
  graphemeCard,
  wordCards,
}: GraphemeWithWordsProps) => {
  return (
    <div className="mb-4 text-gray-950 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 content-visibility-auto">
      <GraphemeCard {...graphemeCard} />
      {wordCards.map((wordCard) => (
        <WordCard {...wordCard} key={nanoid()} />
      ))}
    </div>
  );
};

export { GraphemeWithWords, type GraphemeWithWordsProps };
