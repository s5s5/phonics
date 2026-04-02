"use client";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { use } from "react";

import { PHONICS_LIST } from "@/app/constants";
import { SLUG_TO_CATEGORY } from "@/app/constants/categorySlug";
import { PageLayout } from "@/app/components/PageLayout";
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

  const { category } = use(params);
  const navigationType = SLUG_TO_CATEGORY[category];

  if (!navigationType) {
    notFound();
  }

  return (
    <PageLayout
      modeHref="/"
      modeEmoji="🎮"
      modeLabel="Switch to game mode"
      meaningContent={meaningContent}
    >
      <Poster
        phonicsList={PHONICS_LIST}
        navigationType={navigationType}
        play={play}
        showMeaning={showMeaning}
      />
    </PageLayout>
  );
};

export default PosterCategoryPage;
