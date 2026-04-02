"use client";

import dynamic from "next/dynamic";

import { PHONICS_LIST } from "@/app/constants";
import { PageLayout } from "@/app/components/PageLayout";
import useHowler from "@/app/hooks/useHowler";
import useMeaning from "@/app/hooks/useMeaning";

const Game = dynamic(
  () => import("@/app/components/Game").then((m) => ({ default: m.Game })),
  { ssr: false },
);

const Page = () => {
  const { meaningContent, showMeaning } = useMeaning();
  const { play } = useHowler();

  return (
    <PageLayout
      modeHref="/poster"
      modeEmoji="🀨"
      modeLabel="Switch to poster mode"
      meaningContent={meaningContent}
    >
      <Game phonicsList={PHONICS_LIST} play={play} showMeaning={showMeaning} />
    </PageLayout>
  );
};

export default Page;
