"use client";

import { useState } from "react";

import { Game } from "@/app/components/Game";
import { PHONICS_LIST } from "@/app/constants/list";
import useHowler from "@/app/hooks/useHowler";
import useMeaning from "@/app/hooks/useMeaning";
import useVoiceSelector from "@/app/hooks/useVoiceSelector";

import { Poster } from "./components/Poster";

const Page = () => {
  const [showGame, setShowGame] = useState(true);
  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const { meaningContent, showMeaning } = useMeaning();
  const { play } = useHowler();
  useVoiceSelector(setVoice);

  return (
    <main className="font-sans bg-paper pb-20">
      <h1 className="text-center text-3xl lg:text-6xl font-doodle">
        ✨ Phonics
        <span className="text-2xl lg:text-4xl ml-4">
          /<span className="font-bold underline">fon</span>-iks/
        </span>
      </h1>

      <button
        onClick={() => {
          setShowGame((prev) => !prev);
        }}
      >
        {showGame ? "🎮" : "🀨"}
      </button>

      {showGame && voice && (
        <Game
          phonicsList={PHONICS_LIST}
          play={play}
          voice={voice}
          showMeaning={showMeaning}
        />
      )}

      {!showGame && voice && (
        <Poster
          phonicsList={PHONICS_LIST}
          play={play}
          voice={voice}
          showMeaning={showMeaning}
        />
      )}

      <footer className="text-center text-xs font-playpen content-visibility-auto">
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

export default Page;
