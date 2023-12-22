"use client";

import useSystemVoices from "beautiful-react-hooks/useSystemVoices";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

type VoiceSelectorProps = {
  onVoiceChange: Function;
};

export const VoiceSelector = ({ onVoiceChange }: VoiceSelectorProps) => {
  // let voices: SpeechSynthesisVoice[] = [];
  // if (typeof window !== "undefined") {
  //   voices = useSystemVoices() ?? [];
  // }
  const voices = useSystemVoices() ?? [];
  console.error("voices error", voices);

  const options = voices.filter(({ lang }) => lang === "en-US");

  const [current, setVoice] = useState(0);

  useEffect(() => {
    if (voices.length > 0) {
      const index = voices.findIndex(({ name }) =>
        name.toLowerCase().includes("samantha"),
      );
      setVoice(index);
    }
  }, [voices]);

  useEffect(() => {
    onVoiceChange(voices[current]);
  }, [current, onVoiceChange, voices]);

  return (
    <>
      {options &&
        options.length > 0 &&
        options.map(({ name, lang }) => (
          <div key={nanoid()}>
            {name} ({lang})
          </div>
        ))}
    </>
  );
};
