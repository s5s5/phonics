import { useCallback, useEffect, useMemo, useState } from "react";

const END_TIME = 5000;

export default function useMeaning() {
  const [meaning, setMeaning] = useState("");
  const [show, setShow] = useState(false);
  const [endTime, setEndTime] = useState(Date.now() + END_TIME);

  const showMeaning = useCallback((word: string) => {
    setEndTime(Date.now() + END_TIME);
    setShow(true);
    setMeaning(word);
  }, []);

  const hideMeaning = useCallback(() => {
    Date.now() - endTime > 0 && setShow(false);
  }, [endTime]);

  const meaningContent = useMemo(() => {
    if (!show) return null;
    return (
      <div className="fixed z-20 bottom-20 left-1 right-1 rounded p-1 bg-gray-950/50 text-white text-base text-center">
        {meaning}
      </div>
    );
  }, [meaning, show]);

  useEffect(() => {
    const id = setInterval(() => {
      hideMeaning();
    }, 1000) as unknown as number;
    return () => clearInterval(id);
  }, [hideMeaning]);

  return { meaningContent, showMeaning };
}
