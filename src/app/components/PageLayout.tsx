"use client";
import Link from "next/link";
import useFirework from "@/app/hooks/useFirework";

type Props = {
  children: React.ReactNode;
  modeHref: string;
  modeEmoji: string;
  modeLabel: string;
  meaningContent: React.ReactNode;
};

export const PageLayout = ({
  children,
  modeHref,
  modeEmoji,
  modeLabel,
  meaningContent,
}: Props) => {
  useFirework();

  return (
    <main className="font-sans bg-paper pb-52">
      <h1 className="text-center text-3xl lg:text-6xl font-doodle">
        ✨ Phonics
        <span className="text-2xl lg:text-4xl ml-4">
          /<span className="font-bold underline">fon</span>-iks/
        </span>
      </h1>

      <Link
        href={modeHref}
        aria-label={modeLabel}
        className="fixed top-2 left-2 z-30 cursor-pointer grid px-1 font-bold pb-1 text lg:text-2xl font-doodle border-2 border-gray-800 border-dotted rounded hover:bg-indigo-500 hover:text-white hover:border-white"
      >
        {modeEmoji}
      </Link>

      {children}

      <footer className="text-center text-xs font-playpen content-visibility-auto my-16">
        <div className="font-doodle text-xl">Thanks</div>
        <a
          href="https://www.flaticon.com/free-stickers/speech"
          title="speech stickers"
          target="_blank"
        >
          All stickers created by Gohsantosadrive - Flaticon
        </a>

        <div className="font-doodle text-xl">Contact</div>
        <a href="mailto:s5s5cn@gmail.com">s5s5cn@gmail.com</a>
      </footer>

      {meaningContent}
    </main>
  );
};
