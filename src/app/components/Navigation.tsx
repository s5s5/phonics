"use client";

import { memo } from "react";
import { useRouter } from "next/navigation";

import { CATEGORY_TO_SLUG } from "@/app/constants/categorySlug";

const navigationTypes = [
  "Alphabet",
  "ShortVowel+",
  "LongVowel+",
  "Consonant+",
  "Other",
];

type NavigationProps = {
  currentSlug: string;
};

const Navigation = ({ currentSlug }: NavigationProps) => {
  const router = useRouter();

  return (
    <div className="rounded-b-xl bg-paper flex text-xs lg:text-xl font-doodle max-w-4xl mx-auto py-2 sticky top-0 z-10">
      {navigationTypes.map((type) => (
        <h2
          className={`flex-auto text-center cursor-pointer ${
            CATEGORY_TO_SLUG[type] === currentSlug && "underline decoration-double font-bold"
          } hover:underline`}
          key={type}
          onClick={() => {
            router.push("/poster/" + CATEGORY_TO_SLUG[type]);
          }}
        >
          {type}
        </h2>
      ))}
    </div>
  );
};

const MemoNavigation = memo(Navigation);
export { MemoNavigation as Navigation, navigationTypes };
