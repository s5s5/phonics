"use client";

import List from "@/app/components/List";
import { LIST } from "@/app/constants";

export default function Home() {
  return (
    <main className="font-sans">
      <hr className="mb-4" />
      <h2 className="text-center text-7xl">Alphabet</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "Alphabet")}
      />
      <hr className="my-4" />

      <h2 className="text-center text-7xl">ShortVowel+</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "ShortVowel+")}
      />
      <hr className="my-4" />

      <h2 className="text-center text-7xl">LongVowel+</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "LongVowel+")}
      />
      <hr className="my-4" />

      <h2 className="text-center text-7xl">Consonant+</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "Consonant+")}
      />
      <hr className="my-4" />

      <h2 className="text-center text-7xl">Other</h2>
      <hr className="my-4" />
      <List
        list={LIST.filter(({ graphemeType }) => graphemeType === "Other")}
      />
    </main>
  );
}
