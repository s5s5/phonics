"use client";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

type VoiceSelectorProps = {
  voices: SpeechSynthesisVoice[];
  onVoiceChange: Function;
};

export const VoiceSelector = ({
  voices,
  onVoiceChange,
}: VoiceSelectorProps) => {
  const [current, setVoice] = useState(118);
  const options = voices.map(({ name, lang }, index) => ({
    label: name,
    value: index,
    lang,
  }));

  useEffect(() => {
    onVoiceChange(voices[current]);
  }, [current, onVoiceChange, voices]);

  return (
    <div className="text-center">
      <select
        className="text-xs font-playpen bg-transparent text-center"
        value={current}
        onChange={(e) => setVoice(Number(e.target.value))}
      >
        {options
          .filter(({ lang }) => lang === "en-US")
          .map(({ label, value }) => (
            <option value={value} key={nanoid()} className="text-center">
              {label}
            </option>
          ))}
      </select>
    </div>
  );
};
