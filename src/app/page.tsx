"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import useSound from "use-sound";
import { HookOptions } from "use-sound/dist/types";

const soundUrl = "https://dict.youdao.com/dictvoice?audio=love&type=2";

export default function Home() {
  usePrefetchPronunciationSound("love");
  const { play, stop, isPlaying } = usePronunciationSound("love");

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        stop();
      }, 3000);
    }
  }, [isPlaying]);

  return (
    <main>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <button
        onClick={() => {
          play();
        }}
      >
        fdsfdsfdssd
      </button>
    </main>
  );
}

export function usePronunciationSound(word: string, isLoop?: boolean) {
  const loop = false;
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop, sound }] = useSound(soundUrl, {
    html5: true,
    format: ["mp3"],
    loop,
    volume: 1,
    rate: 1,
  } as HookOptions);

  useEffect(() => {
    if (!sound) return;
    sound.loop(loop);
  }, [loop, sound]);

  useEffect(() => {
    if (!sound) return;
    const unListens: Array<() => void> = [];

    return () => {
      setIsPlaying(false);
      unListens.forEach((unListen) => unListen());
      sound.unload();
    };
  }, [sound]);

  return { play, stop, isPlaying };
}

export function usePrefetchPronunciationSound(word: string | undefined) {
  useEffect(() => {
    // if (!word) return;

    const head = document.head;
    const isPrefetch = (
      Array.from(head.querySelectorAll("link[href]")) as HTMLLinkElement[]
    ).some((el) => el.href === soundUrl);

    if (!isPrefetch) {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = soundUrl;
      head.appendChild(link);

      return () => {
        head.removeChild(link);
      };
    }
  }, [word]);
}
