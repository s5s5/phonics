"use client";

import { nanoid } from "nanoid";
import { useMemo, useState } from "react";

import List from "@/app/components/List";
import { VoiceSelector } from "@/app/components/VoiceSelector";
import { PHONICS_LIST } from "@/app/constants/list";
import useMeaning from "@/app/hooks/useMeaning";

const sort = ["Alphabet", "ShortVowel+", "LongVowel+", "Consonant+", "Other"];

export default function Home() {
  const [nav, setNav] = useState(sort[0]);

  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const { meaningContent, showMeaning } = useMeaning();

  const listContent = useMemo(
    () =>
      sort.map((type, index) => (
        <div key={nanoid()}>
          {type === nav && (
            <List
              list={PHONICS_LIST}
              voice={voice}
              showMeaning={showMeaning}
              type={type}
            />
          )}
        </div>
      )),
    [nav, voice],
  );

  return (
    <main className="font-sans bg-paper">
      <h1 className="text-center text-3xl lg:text-6xl font-doodle">
        ✨ Phonics
        <span className="text-2xl lg:text-4xl ml-4 inline-block">
          /<span className="font-bold">fon</span>-iks/
        </span>
      </h1>

      <div className="bg-paper flex text-xs lg:text-xl font-doodle max-w-4xl mx-auto py-2 sticky top-0 z-10">
        {sort.map((type, index) => (
          <h2
            className={`flex-auto text-center cursor-pointer ${
              type === nav && "underline decoration-double"
            } hover:underline`}
            key={nanoid()}
            onClick={() => {
              setNav(type);
            }}
          >
            {type}
          </h2>
        ))}
      </div>
      {listContent}

      <div className="text-center text-xs font-playpen content-visibility-auto">
        <div className="font-doodle text-xl">Thanks</div>
        <a
          href="https://www.flaticon.com/free-stickers/speech"
          title="speech stickers"
          target="_blank"
        >
          All stickers created by Gohsantosadrive - Flaticon
        </a>
        <div className="mt-3">
          <VoiceSelector onVoiceChange={setVoice} />
        </div>
      </div>

      {meaningContent}
    </main>
  );
}
