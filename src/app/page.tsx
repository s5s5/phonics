"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import List from "@/app/components/List";

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
    queryKey: ["LIST"],
    queryFn: () => fetch("/api/getList").then((res) => res.json()),
  });
  console.log("data", data);
  const sort = ["Alphabet", "ShortVowel+", "LongVowel+", "Consonant+", "Other"];

  return (
    <main className="font-sans" style={{ backgroundImage: "url(/bg.jpg)" }}>
      <h1 className="text-center text-7xl font-doodle">Phonics</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!data && <div>No data</div>}
      {!isPending &&
        !error &&
        data &&
        sort.map((type) => (
          <>
            <h2 className="text-center text-7xl font-doodle">Alphabet</h2>
            <hr className="my-4" />
            <List list={data.LIST} type={type} />
          </>
        ))}
      {/*<pre>{JSON.stringify(voices, null, 2)}</pre>*/}
    </main>
  );
}
