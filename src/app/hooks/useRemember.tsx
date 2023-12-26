import useCookie from "beautiful-react-hooks/useCookie";
import { useCallback, useEffect, useState } from "react";

type cookieType = {
  nav: string;
  top: number;
};
export default function useRemember({
  nav,
  setNav,
}: {
  nav: string;
  setNav: Function;
}) {
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const { cookieValue, updateCookie } = useCookie("phonics", {
    path: "/",
    defaultValue: '{"nav":"Alphabet","top":0}',
  });

  const remember = useCallback(() => {
    const top = window.scrollY;
    const value = JSON.stringify({ nav, top });
    if (value !== cookieValue && !isFirstOpen) {
      updateCookie(JSON.stringify({ nav, top }));
    }
  }, [cookieValue, isFirstOpen, nav, updateCookie]);

  const scrollTo = useCallback((top: number) => {
    window.scrollTo({ top });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      remember();
    }, 1000) as unknown as number;
    return () => clearInterval(id);
  }, [remember]);

  useEffect(() => {
    if (isFirstOpen && cookieValue !== undefined) {
      const { nav, top } = JSON.parse(cookieValue!) as unknown as cookieType;
      setNav(nav);
      setTimeout(() => {
        setIsFirstOpen(false);
        scrollTo(top);
      }, 1);
    }
  }, [cookieValue, isFirstOpen, scrollTo, setNav]);

  return { remember };
}
