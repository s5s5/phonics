"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center p-8 font-doodle">
      <h2 className="text-2xl mb-4">Something went wrong</h2>
      <button
        className="border-2 border-gray-800 border-dotted rounded px-4 py-2 hover:bg-indigo-500 hover:text-white hover:border-white"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
