import { useEffect } from "react";

export function usePrefetchPronunciationSound(word: string) {
  useEffect(() => {
    if (word === "") return;

    const soundUrl = `/audio/${word}.mp3`;
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
