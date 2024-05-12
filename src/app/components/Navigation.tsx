import useRemember from "@/app/hooks/useRemember";

const navigationTypes = [
  "Alphabet",
  "ShortVowel+",
  "LongVowel+",
  "Consonant+",
  "Other",
];

type NavigationProps = {
  navigationType: string;
  setNavigationType: (type: string) => void;
};

const Navigation = ({ navigationType, setNavigationType }: NavigationProps) => {
  const { remember } = useRemember({ navigationType, setNavigationType });

  return (
    <div className="rounded-b-xl bg-paper flex text-xs lg:text-xl font-doodle max-w-4xl mx-auto py-2 sticky top-0 z-10">
      {navigationTypes.map((type) => (
        <h2
          className={`flex-auto text-center cursor-pointer ${
            type === navigationType && "underline decoration-double font-bold"
          } hover:underline`}
          key={type}
          onClick={() => {
            setNavigationType(type);
            remember();
          }}
        >
          {type}
        </h2>
      ))}
    </div>
  );
};

export { Navigation, navigationTypes };
