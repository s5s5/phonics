"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useEffect } from "react";

import { PHONICS_LIST } from "@/app/constants";
import { SLUG_TO_CATEGORY } from "@/app/constants/categorySlug";
import useHowler from "@/app/hooks/useHowler";
import useMeaning from "@/app/hooks/useMeaning";

const Poster = dynamic(() =>
  import("@/app/components/Poster").then((m) => ({ default: m.Poster })),
);

const PosterCategoryPage = ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { meaningContent, showMeaning } = useMeaning();
  const { play } = useHowler();

  useEffect(() => {
    import("mouse-firework").then((firework) => {
      firework.default({
        excludeElements: ["a", "button", "h2"],
        particles: [
          {
            shape: "star",
            move: ["emit", "rotate"],
            easing: "easeOutExpo",
            colors: ["#FACC15", "#ff4d00", "#6366F1", "#FACC15"],
            number: 16,
            duration: [1200, 1800],
            shapeOptions: {
              radius: [16, 32],
              spikes: 5,
            },
          },
          {
            shape: "star",
            move: ["diffuse", "rotate"],
            easing: "easeOutExpo",
            colors: ["#FFF"],
            number: 2,
            duration: [1200, 1800],
            shapeOptions: {
              radius: 20,
              alpha: 0.5,
              lineWidth: 6,
              spikes: 5,
            },
          },
        ],
      });
    });
  }, []);

  const { category } = use(params);
  const navigationType = SLUG_TO_CATEGORY[category];

  if (!navigationType) {
    notFound();
  }

  return (
    <main className="font-sans bg-paper pb-52">
      <h1 className="text-center text-3xl lg:text-6xl font-doodle">
        ✨ Phonics
        <span className="text-2xl lg:text-4xl ml-4">
          /<span className="font-bold underline">fon</span>-iks/
        </span>
      </h1>

      <Link
        href="/"
        aria-label="Switch to game mode"
        className="fixed top-2 left-2 z-30 cursor-pointer grid px-1 font-bold pb-1 text lg:text-2xl font-doodle border-2 border-gray-800 border-dotted rounded hover:bg-indigo-500 hover:text-white hover:border-white"
      >
        🎮
      </Link>

      <Poster
        phonicsList={PHONICS_LIST}
        navigationType={navigationType}
        play={play}
        showMeaning={showMeaning}
      />

      <footer className="text-center text-xs font-playpen content-visibility-auto my-16">
        <div className="font-doodle text-xl">Thanks</div>
        <a
          href="https://www.flaticon.com/free-stickers/speech"
          title="speech stickers"
          target="_blank"
        >
          All stickers created by Gohsantosadrive - Flaticon
        </a>

        <div className="font-doodle text-xl">Contact</div>
        <a href="mailto:s5s5cn@gmail.com">s5s5cn@gmail.com</a>
      </footer>

      {meaningContent}
    </main>
  );
};

export default PosterCategoryPage;
