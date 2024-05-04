import { useEffect, useState } from "react";

const PREFERRED_VOICES = ["samantha", "google us"];

const useVoiceSelector = (setVoice: (voice: SpeechSynthesisVoice) => void) => {
  const [isAutoSet, setIsAutoSet] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    setVoices(window.speechSynthesis.getVoices());
  }, []);

  useEffect(() => {
    if (voices.length > 0 && !isAutoSet) {
      let index = voices.findIndex(({ name }) =>
        PREFERRED_VOICES.some((voice) => name.toLowerCase().includes(voice)),
      );

      setVoice(voices[index === -1 ? 0 : index]);
      setIsAutoSet(true);
    }
  }, [isAutoSet, setVoice, voices]);
};

export default useVoiceSelector;
