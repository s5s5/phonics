import useCookie from "beautiful-react-hooks/useCookie";
import isEqual from "lodash/isEqual";
import { useCallback, useEffect, useState } from "react";

type cookieType = {
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
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const { cookieValue, updateCookie } = useCookie("phonics", {
    path: "/",
    defaultValue: '{"navigationType":"Alphabet","top":0}',
  });

  const remember = useCallback(() => {
    const top = window.scrollY;
    const value = JSON.stringify({ navigationType, top });
    if (!isEqual(value, cookieValue) && !isFirstOpen) {
      updateCookie(JSON.stringify({ navigationType, top }));
    }
  }, [cookieValue, isFirstOpen, navigationType, updateCookie]);

  const scrollTo = useCallback((top: number) => {
    window.scrollTo({ top });
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      remember();
    }, 1000);
    return () => window.clearInterval(id);
  }, [remember]);

  useEffect(() => {
    if (isFirstOpen && cookieValue !== undefined) {
      const { navigationType, top } = JSON.parse(
        cookieValue!,
      ) as unknown as cookieType;
      setNavigationType(navigationType);
      window.setTimeout(() => {
        setIsFirstOpen(false);
        scrollTo(top);
      }, 1);
    }
  }, [cookieValue, isFirstOpen, scrollTo, setNavigationType]);

  return { remember };
};

export default useRemember;
