"use client";

import List from "@/app/components/List";
import { LIST } from "@/app/constants";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import EasySpeech from "easy-speech";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["dict"],
    queryFn: () => fetch("/api/getDict").then((res) => res.json()),
  });

  useEffect(() => {
    EasySpeech.init({ maxTimeout: 5000, interval: 250 })
      .then(() => console.debug("load complete"))
      .catch((e: any) => console.error(e));
  }, []);

  return (
    <main className="font-sans" style={{ backgroundImage: "url(/bg.jpg)" }}>
      <h1 className="text-center text-7xl font-doodle">Phonics</h1>

      <hr className="mb-4" />
      <h2 className="text-center text-7xl font-doodle">Alphabet</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "Alphabet")}
        dict={data?.dict}
        speech={EasySpeech}
      />
      <hr className="my-4" />

      <h2 className="text-center text-7xl font-doodle">Short Vowel +</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "ShortVowel+")}
        dict={data?.dict}
        speech={EasySpeech}
      />
      <hr className="my-4" />

      <h2 className="text-center text-7xl font-doodle">Long Vowel +</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "LongVowel+")}
        dict={data?.dict}
        speech={EasySpeech}
      />
      <hr className="my-4" />

      <h2 className="text-center text-7xl font-doodle">Consonant +</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "Consonant+")}
        dict={data?.dict}
        speech={EasySpeech}
      />
      <hr className="my-4" />

      <h2 className="text-center text-7xl font-doodle">Other</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "Other")}
        dict={data?.dict}
        speech={EasySpeech}
      />
    </main>
  );
}
