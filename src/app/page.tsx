"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import useAudio from "beautiful-react-hooks/useAudio";
import { nanoid } from "nanoid";
import { useCallback, useState } from "react";

import List from "@/app/components/List";
import { VoiceSelector } from "@/app/components/VoiceSelector";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["LIST"],
    queryFn: () => fetch("/api/getList").then((res) => res.json()),
  });

  const sort = ["Alphabet", "ShortVowel+", "LongVowel+", "Consonant+", "Other"];

  const [nav, setNav] = useState(sort[0]);

  const [voice, setVoice] = useState<SpeechSynthesisVoice>();

  const [state, controls, audioRef] = useAudio(`/audio/æ.mp3`, {
    preload: "none",
  });

  const play = useCallback((phoneme: string) => {
    const audio = audioRef.current;
    audio.src = `/audio/${phoneme}.mp3`;
    audio.load();
    audio.play();
  }, []);

  return (
    <main className="font-sans" style={{ backgroundImage: "url(/bg.jpg)" }}>
      <h1 className="text-center text-3xl md:text-6xl font-doodle">Phonics</h1>
      {isPending && (
        <div className="font-doodle h-screen text-center text-2xl">
          Loading...
        </div>
      )}
      {error && (
        <div className="font-doodle h-screen text-center text-2xl">
          Error: {error.message}
        </div>
      )}
      {!data && (
        <div className="font-doodle h-screen text-center text-2xl">No data</div>
      )}
      {!isPending && !error && data && (
        <>
          <div
            className="flex text-xs md:text-xl font-doodle max-w-4xl mx-auto py-2 sticky top-0"
            style={{ backgroundImage: "url(/bg.jpg)" }}
          >
            {sort.map((type, index) => (
              <h2
                className={`flex-auto text-center cursor-pointer ${
                  type === nav && "underline"
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
          {sort.map((type, index) => (
            <div
              key={nanoid()}
              style={{ display: type === nav ? "block" : "none" }}
            >
              <List list={data.LIST} voice={voice} play={play} type={type} />
            </div>
          ))}
        </>
      )}
      <hr />
      <div className="text-center text-xs font-playpen">
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
    </main>
  );
}
