import { useCallback, useEffect, useRef } from "react";

const STORAGE_KEY = "phonics";

type SavedState = {
  navigationType: string;
  top: number;
};

const useRemember = ({
  navigationType,
  setNavigationType,
}: {
  navigationType: string;
  setNavigationType: (type: string) => void;
}) => {
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const saved: SavedState = JSON.parse(raw);
      setNavigationType(saved.navigationType ?? "Alphabet");
      window.setTimeout(() => window.scrollTo({ top: saved.top ?? 0 }), 0);
    } catch (e) {
      console.warn("Failed to restore saved state:", e);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const remember = useCallback(() => {
    const value: SavedState = { navigationType, top: window.scrollY };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  }, [navigationType]);

  const debounceRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Debounce localStorage writes to avoid thrashing on every scroll event
    const handleScroll = () => {
      clearTimeout(debounceRef.current);
      debounceRef.current = window.setTimeout(() => {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ navigationType, top: window.scrollY }),
        );
      }, 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(debounceRef.current);
    };
  }, [navigationType]);

  return { remember };
};

export default useRemember;
