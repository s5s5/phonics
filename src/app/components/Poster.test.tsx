import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect } from "vitest";
import { Poster } from "@/app/components/Poster";
import type { Phonics } from "@/app/constants";

vi.mock("@/app/components/Navigation", () => ({
  Navigation: ({ currentSlug }: { currentSlug: string }) => (
    <div data-testid="navigation">{currentSlug}</div>
  ),
}));

vi.mock("@/app/components/GraphemeWithWords", () => ({
  GraphemeWithWords: ({
    graphemeCard,
  }: {
    graphemeCard: { grapheme: string; onClick: () => void };
    wordCards: unknown[];
  }) => (
    <div
      data-testid="grapheme-with-words"
      data-grapheme={graphemeCard.grapheme}
      onClick={graphemeCard.onClick}
    >
      {graphemeCard.grapheme}
    </div>
  ),
}));

vi.mock("@/app/components/WordCard", () => ({
  splitWord: vi.fn((word: string) => [{ word, highLight: false }]),
}));

const mockPhonics: Phonics[] = [
  {
    phoneme: "æ",
    grapheme: "a",
    graphemeType: "Alphabet",
    words: [{ rank: 1, word: "apple" }],
  },
  {
    phoneme: "eɪ",
    grapheme: "ai",
    graphemeType: "ShortVowel",
    words: [{ rank: 1, word: "rain" }],
  },
  {
    phoneme: "b",
    grapheme: "b",
    graphemeType: "Alphabet",
    words: [{ rank: 1, word: "ball" }],
  },
];

describe("Poster", () => {
  it("renders only cards matching navigationType", () => {
    render(
      <Poster
        phonicsList={mockPhonics}
        navigationType="Alphabet"
        play={vi.fn()}
        showMeaning={vi.fn()}
      />,
    );
    const cards = screen.getAllByTestId("grapheme-with-words");
    expect(cards).toHaveLength(2);
    expect(screen.getByText("a")).toBeInTheDocument();
    expect(screen.getByText("b")).toBeInTheDocument();
    expect(screen.queryByText("ai")).not.toBeInTheDocument();
  });

  it("renders navigation for the current type", () => {
    render(
      <Poster
        phonicsList={mockPhonics}
        navigationType="Alphabet"
        play={vi.fn()}
        showMeaning={vi.fn()}
      />,
    );
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("renders zero cards when no phonics match navigationType", () => {
    render(
      <Poster
        phonicsList={mockPhonics}
        navigationType="NonExistent"
        play={vi.fn()}
        showMeaning={vi.fn()}
      />,
    );
    expect(screen.queryAllByTestId("grapheme-with-words")).toHaveLength(0);
  });

  it("calls play and showMeaning when a grapheme card is clicked", async () => {
    const user = userEvent.setup();
    const play = vi.fn();
    const showMeaning = vi.fn();
    render(
      <Poster
        phonicsList={mockPhonics}
        navigationType="Alphabet"
        play={play}
        showMeaning={showMeaning}
      />,
    );
    await user.click(screen.getByText("a"));
    expect(play).toHaveBeenCalledWith("æ");
    expect(showMeaning).toHaveBeenCalledWith(
      expect.objectContaining({ wordList: [{ word: "a" }] }),
    );
  });
});
