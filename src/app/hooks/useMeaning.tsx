import useTimeout from "beautiful-react-hooks/useTimeout";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function useMeaning() {
  const [meaning, setMeaning] = useState("");
  const [show, setShow] = useState(false);

  const showMeaning = useCallback((word: string) => {
    setMeaning(word);
    setShow(true);
  }, []);

  const meaningContent = useMemo(() => {
    if (!show) return null;
    return (
      <div className="fixed z-20 bottom-20 left-1 right-1 rounded p-1 bg-gray-950 text-white text-base text-center">
        {meaning}
      </div>
    );
  }, [meaning, show]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [show]);

  return { meaningContent, showMeaning };
}
