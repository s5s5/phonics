import { useEffect, useState } from "react";

type VoiceSelectorProps = {
  onVoiceChange: Function;
};

const VoiceSelector = ({ onVoiceChange }: VoiceSelectorProps) => {
  const [current, setVoice] = useState(0);
  const [isAutoSet, setIsAutoSet] = useState(false);

  let voices: any[] = [];
  if (typeof window !== "undefined") {
    voices = window.speechSynthesis.getVoices() ?? [];
  }

  useEffect(() => {
    if (voices.length > 0 && !isAutoSet) {
      let index = voices.findIndex(({ name }) =>
        name.toLowerCase().includes("google us"),
      );
      if (index === -1) {
        index = voices.findIndex(({ name }) =>
          name.toLowerCase().includes("samantha"),
        );
      }
      setVoice(index === -1 ? 0 : index);
      setIsAutoSet(true);
    }
  }, [isAutoSet, voices]);

  useEffect(() => {
    onVoiceChange(voices[current]);
  }, [current, onVoiceChange, voices]);

  return null;
};

export { VoiceSelector };
