import { useEffect, useState } from "react";
// @ts-ignore
import { HookOptions, useSound } from "use-sound";

export function usePronunciationSound(word: string, isLoop?: boolean) {
  const soundUrl = `/audio/${word}.mp3`;
  const loop = isLoop ?? false;
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop, sound }] = useSound(soundUrl, {
    html5: true,
    format: ["mp3"],
    loop,
    volume: 1,
    rate: 1,
  } as HookOptions);

  useEffect(() => {
    if (!sound) {
      return;
    }
    sound.loop(loop);
  }, [loop, sound]);

  useEffect(() => {
    if (!sound) {
      return;
    }

    return () => {
      setIsPlaying(false);
      sound.unload();
    };
  }, [sound]);

  return { play, stop, isPlaying };
}
