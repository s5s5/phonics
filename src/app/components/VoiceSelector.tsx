"use client";

// import { nanoid } from "nanoid";
import { useEffect, useMemo, useState } from "react";

type VoiceSelectorProps = {
  onVoiceChange: Function;
};

export const VoiceSelector = ({ onVoiceChange }: VoiceSelectorProps) => {
  const [current, setVoice] = useState(0);
  const [isAutoSet, setIsAutoSet] = useState(false);

  let voices: any[] = [];
  if (typeof window !== "undefined") {
    voices = window.speechSynthesis.getVoices() ?? [];
  }

  // const options = useMemo(
  //   () =>
  //     voices
  //       .map((voice, index) => ({
  //         voice,
  //         index,
  //       }))
  //       .filter(({ voice }) => voice.lang === "en-US"),
  //   [voices],
  // );

  useEffect(() => {
    if (voices.length > 0 && !isAutoSet) {
      const index = voices.findIndex(({ name }) =>
        name.toLowerCase().includes("samantha"),
      );
      setVoice(index);
      setIsAutoSet(true);
    }
  }, [isAutoSet, voices]);

  useEffect(() => {
    onVoiceChange(voices[current]);
  }, [current, onVoiceChange, voices]);

  return null;

  // if (options.length === 0) return null;

  // return (
  //   <div className="content-visibility-auto">
  //     {options.map(({ voice, index }) => (
  //       <div key={nanoid()}>
  //         <span onClick={() => setVoice(index)}>
  //           {voice.name} ({voice.lang})
  //           {current === index ? <span className="text-xl">📣</span> : ""}
  //         </span>
  //       </div>
  //     ))}
  //   </div>
  // );
};
