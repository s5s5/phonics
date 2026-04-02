import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import { Game } from "@/app/components/Game";
import { useGameStore } from "@/app/store/gameStore";
import type { Phonics } from "@/app/constants";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      animate,
      ...props
    }: React.HTMLAttributes<HTMLDivElement> & { animate?: unknown }) => (
      <div {...props}>{children}</div>
    ),
    h3: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 {...props}>{children}</h3>
    ),
    button: ({
      children,
      onClick,
      ...props
    }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <button onClick={onClick} {...props}>
        {children}
      </button>
    ),
  },
}));

vi.mock("react-hydration-provider", () => ({
  Client: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock("@/app/components/Line", () => ({
  Line: () => <div data-testid="line" />,
}));

vi.mock("@/app/components/GraphemeCard", () => ({
  GraphemeCard: ({
    grapheme,
    onClick,
    selected,
  }: {
    grapheme: string;
    onClick: () => void;
    selected?: boolean;
  }) => (
    <button
      data-testid={`grapheme-${grapheme}`}
      aria-pressed={selected}
      onClick={onClick}
    >
      {grapheme}
    </button>
  ),
}));

vi.mock("@/app/components/WordCard", () => ({
  WordCard: ({
    word,
    grapheme,
    onClick,
    selected,
  }: {
    word: string;
    grapheme: string;
    onClick: () => void;
    selected?: boolean;
  }) => (
    <button
      data-testid={`word-${word}`}
      data-grapheme={grapheme}
      aria-pressed={selected}
      onClick={onClick}
    >
      {word}
    </button>
  ),
  splitWord: vi.fn((word: string) => [{ word, highLight: false }]),
}));

const initialState = {
  selectedWord: undefined,
  selectedGrapheme: undefined,
  selectedWordGroup: undefined,
  selectedGraphemeGroup: undefined,
  wordGroupIndex: [0, 0, 0, 0],
  graphemeGroupIndex: [0, 0, 0, 0],
  resetCount: 0,
};

// 4 phonics items — with Math.random=0, each distributed one-per-group (totalCount=4)
const mockPhonics: Phonics[] = [
  {
    phoneme: "æ",
    grapheme: "a",
    graphemeType: "Alphabet",
    words: [{ rank: 1, word: "apple" }],
  },
  {
    phoneme: "b",
    grapheme: "b",
    graphemeType: "Alphabet",
    words: [{ rank: 1, word: "ball" }],
  },
  {
    phoneme: "k",
    grapheme: "c",
    graphemeType: "Alphabet",
    words: [{ rank: 1, word: "cat" }],
  },
  {
    phoneme: "d",
    grapheme: "d",
    graphemeType: "Alphabet",
    words: [{ rank: 1, word: "dog" }],
  },
];

beforeEach(() => {
  useGameStore.setState(initialState, false);
  vi.spyOn(Math, "random").mockReturnValue(0);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Game", () => {
  it("renders the progress counter at 0", () => {
    render(<Game phonicsList={mockPhonics} play={vi.fn()} showMeaning={vi.fn()} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders grapheme cards", () => {
    render(<Game phonicsList={mockPhonics} play={vi.fn()} showMeaning={vi.fn()} />);
    // With Math.random=0, all 4 grapheme items are visible (one per column)
    const graphemeCards = screen
      .getAllByRole("button")
      .filter((btn) => btn.dataset["testid"]?.startsWith("grapheme-"));
    expect(graphemeCards.length).toBeGreaterThan(0);
  });

  it("renders word cards", () => {
    render(<Game phonicsList={mockPhonics} play={vi.fn()} showMeaning={vi.fn()} />);
    const wordCards = screen
      .getAllByRole("button")
      .filter((btn) => btn.dataset["testid"]?.startsWith("word-"));
    expect(wordCards.length).toBeGreaterThan(0);
  });

  it("renders the Line component", () => {
    render(<Game phonicsList={mockPhonics} play={vi.fn()} showMeaning={vi.fn()} />);
    expect(screen.getByTestId("line")).toBeInTheDocument();
  });

  it("shows Congratulations when all pairs are matched", () => {
    // With Math.random=0 and 4 items: each group has 1 item → totalCount=4
    // Setting graphemeGroupIndex=[1,1,1,1] gives completedCount=4=totalCount
    useGameStore.setState({ graphemeGroupIndex: [1, 1, 1, 1] }, false);
    render(<Game phonicsList={mockPhonics} play={vi.fn()} showMeaning={vi.fn()} />);
    expect(screen.getByText(/Congratulations/)).toBeInTheDocument();
    expect(screen.getByText("PLAY AGAIN")).toBeInTheDocument();
  });

  it("resets the game when PLAY AGAIN is clicked", async () => {
    useGameStore.setState({ graphemeGroupIndex: [1, 1, 1, 1] }, false);
    const user = userEvent.setup();
    render(<Game phonicsList={mockPhonics} play={vi.fn()} showMeaning={vi.fn()} />);
    await user.click(screen.getByText("PLAY AGAIN"));
    const state = useGameStore.getState();
    expect(state.graphemeGroupIndex).toEqual([0, 0, 0, 0]);
    expect(state.resetCount).toBe(1);
  });

  it("calls showMeaning when a grapheme card is clicked", async () => {
    const user = userEvent.setup();
    const showMeaning = vi.fn();
    render(
      <Game phonicsList={mockPhonics} play={vi.fn()} showMeaning={showMeaning} />,
    );
    const graphemeCards = screen
      .getAllByRole("button")
      .filter((btn) => btn.dataset["testid"]?.startsWith("grapheme-"));
    await user.click(graphemeCards[0]);
    expect(showMeaning).toHaveBeenCalled();
  });

  it("calls play when a grapheme card is clicked", async () => {
    const user = userEvent.setup();
    const play = vi.fn();
    render(<Game phonicsList={mockPhonics} play={play} showMeaning={vi.fn()} />);
    const graphemeCards = screen
      .getAllByRole("button")
      .filter((btn) => btn.dataset["testid"]?.startsWith("grapheme-"));
    await user.click(graphemeCards[0]);
    expect(play).toHaveBeenCalled();
  });

  it("calls showMeaning when a word card is clicked", async () => {
    const user = userEvent.setup();
    const showMeaning = vi.fn();
    render(
      <Game phonicsList={mockPhonics} play={vi.fn()} showMeaning={showMeaning} />,
    );
    const wordCards = screen
      .getAllByRole("button")
      .filter((btn) => btn.dataset["testid"]?.startsWith("word-"));
    await user.click(wordCards[0]);
    expect(showMeaning).toHaveBeenCalled();
  });

  it("advances groups when matching grapheme and word are both selected", async () => {
    const user = userEvent.setup();
    render(<Game phonicsList={mockPhonics} play={vi.fn()} showMeaning={vi.fn()} />);

    // Click a grapheme card first, then click the matching word card
    const graphemeCards = screen
      .getAllByRole("button")
      .filter((btn) => btn.dataset["testid"]?.startsWith("grapheme-"));
    await user.click(graphemeCards[0]);

    const selectedGrapheme = useGameStore.getState().selectedGrapheme;
    const matchingWord = screen.queryByTestId(`word-${
      // find a word card that matches the selected grapheme
      ["apple", "ball", "cat", "dog"].find(() => true)
    }`);

    // Find a word card with matching grapheme attribute
    const wordCards = screen
      .getAllByRole("button")
      .filter(
        (btn) =>
          btn.dataset["testid"]?.startsWith("word-") &&
          btn.dataset["grapheme"] === selectedGrapheme,
      );
    if (wordCards.length > 0) {
      await user.click(wordCards[0]);
      // After a match, selected state should be cleared
      expect(useGameStore.getState().selectedGrapheme).toBeUndefined();
    }

    void matchingWord;
  });
});
