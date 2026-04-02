import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { GraphemeWithWords } from "@/app/components/GraphemeWithWords";

vi.mock("@/app/components/GraphemeCard", () => ({
  GraphemeCard: ({ grapheme }: { grapheme: string }) => (
    <div data-testid="grapheme-card">{grapheme}</div>
  ),
}));

vi.mock("@/app/components/WordCard", () => ({
  WordCard: ({ word }: { word: string }) => (
    <div data-testid="word-card">{word}</div>
  ),
  splitWord: vi.fn(),
}));

describe("GraphemeWithWords", () => {
  const graphemeCard = { grapheme: "ai", onClick: vi.fn() };
  const wordCards = [
    { word: "rain", grapheme: "ai", onClick: vi.fn() },
    { word: "sail", grapheme: "ai", onClick: vi.fn() },
  ];

  it("renders the grapheme card", () => {
    render(<GraphemeWithWords graphemeCard={graphemeCard} wordCards={wordCards} />);
    expect(screen.getByTestId("grapheme-card")).toBeInTheDocument();
    expect(screen.getByText("ai")).toBeInTheDocument();
  });

  it("renders all word cards", () => {
    render(<GraphemeWithWords graphemeCard={graphemeCard} wordCards={wordCards} />);
    const cards = screen.getAllByTestId("word-card");
    expect(cards).toHaveLength(2);
    expect(screen.getByText("rain")).toBeInTheDocument();
    expect(screen.getByText("sail")).toBeInTheDocument();
  });

  it("renders empty list when no word cards provided", () => {
    render(<GraphemeWithWords graphemeCard={graphemeCard} wordCards={[]} />);
    expect(screen.queryAllByTestId("word-card")).toHaveLength(0);
    expect(screen.getByTestId("grapheme-card")).toBeInTheDocument();
  });
});
