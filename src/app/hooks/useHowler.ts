import { Howl } from "howler";
import { useCallback, useEffect, useState } from "react";

const useHowler = () => {
  const [sound, setSound] = useState<Howl | undefined>(undefined);
  const [phoneme, setPhoneme] = useState<string | undefined>(undefined);

  const play = useCallback(
    (newPhoneme: string) => {
      if (!newPhoneme) return;
      if (newPhoneme !== phoneme) {
        const newSound = new Howl({
          src: [`/sound/${newPhoneme}.mp3`],
          autoplay: true,
        });
        setSound(newSound);
        setPhoneme(newPhoneme);
        return;
      }
      if (!sound) return;
      sound.stop();
      sound.play();
    },
    [phoneme, sound],
  );

  useEffect(() => {
    return () => {
      if (!sound) return;
      sound.stop();
      sound.unload();
    };
  }, [sound]);

  return { play };
};

export default useHowler;
