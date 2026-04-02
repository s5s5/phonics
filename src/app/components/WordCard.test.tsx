import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { WordCard } from "@/app/components/WordCard";
import useVoiceSelector from "@/app/hooks/useVoiceSelector";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    onError,
    ...props
  }: {
    src: string;
    alt: string;
    onError?: React.ReactEventHandler<HTMLImageElement>;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} onError={onError} {...(props as object)} />,
}));

vi.mock("@/app/hooks/useVoiceSelector", () => ({
  default: vi.fn(),
}));

beforeEach(() => {
  Object.defineProperty(window, "speechSynthesis", {
    value: { speak: vi.fn() },
    writable: true,
    configurable: true,
  });

  // jsdom does not implement SpeechSynthesisUtterance; must be a real class for `new`
  class MockSpeechSynthesisUtterance {
    text: string;
    voice: SpeechSynthesisVoice | null = null;
    rate = 1;
    constructor(text: string) {
      this.text = text;
    }
  }
  Object.defineProperty(window, "SpeechSynthesisUtterance", {
    value: MockSpeechSynthesisUtterance,
    writable: true,
    configurable: true,
  });
});

describe("WordCard", () => {
  it("renders the word image", () => {
    render(<WordCard word="apple" grapheme="a" onClick={vi.fn()} />);
    expect(screen.getByAltText("apple")).toBeInTheDocument();
  });

  it("renders highlighted grapheme portion with red-500 class", () => {
    render(<WordCard word="apple" grapheme="a" onClick={vi.fn()} />);
    const highlighted = document.querySelector("span.text-red-500");
    expect(highlighted).toBeTruthy();
    expect(highlighted?.textContent).toBe("a");
  });

  it("renders non-highlighted portion without red-500 class", () => {
    render(<WordCard word="apple" grapheme="a" onClick={vi.fn()} />);
    const spans = document.querySelectorAll("span");
    const plain = Array.from(spans).find(
      (s) => !s.classList.contains("text-red-500") && s.textContent === "pple"
    );
    expect(plain).toBeTruthy();
  });

  it("calls onClick when the card is clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<WordCard word="rain" grapheme="ai" onClick={onClick} />);
    const card = screen.getByRole("button", { name: "Word rain" });
    await user.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("calls speechSynthesis.speak when clicked", async () => {
    const user = userEvent.setup();
    render(<WordCard word="rain" grapheme="ai" onClick={vi.fn()} />);
    const card = screen.getByRole("button", { name: "Word rain" });
    await user.click(card);
    expect(window.speechSynthesis.speak).toHaveBeenCalledTimes(1);
  });

  it("applies selected styles when selected prop is true", () => {
    render(<WordCard word="rain" grapheme="ai" onClick={vi.fn()} selected />);
    const card = screen.getByRole("button", { name: "Word rain" });
    expect(card.className).toContain("bg-indigo-500");
  });

  it("does not mark aria-pressed when selected is false", () => {
    render(
      <WordCard word="rain" grapheme="ai" onClick={vi.fn()} selected={false} />
    );
    const card = screen.getByRole("button", { name: "Word rain" });
    expect(card).toHaveAttribute("aria-pressed", "false");
  });

  it("sets aria-pressed to true when selected", () => {
    render(<WordCard word="rain" grapheme="ai" onClick={vi.fn()} selected />);
    const card = screen.getByRole("button", { name: "Word rain" });
    expect(card).toHaveAttribute("aria-pressed", "true");
  });

  it("shows text fallback and removes image when image fails to load", () => {
    render(<WordCard word="rain" grapheme="ai" onClick={vi.fn()} />);
    const img = screen.getByAltText("rain");
    fireEvent.error(img);
    expect(screen.queryByAltText("rain")).toBeNull();
    // The fallback div shows the word text
    expect(screen.getByText("rain")).toBeInTheDocument();
  });

  it("calls onClick on Enter key", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<WordCard word="cat" grapheme="a" onClick={onClick} />);
    const card = screen.getByRole("button", { name: "Word cat" });
    card.focus();
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("calls onClick on Space key", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<WordCard word="cat" grapheme="a" onClick={onClick} />);
    const card = screen.getByRole("button", { name: "Word cat" });
    card.focus();
    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("sets utter.voice and utter.rate=0.7 when a voice is available", async () => {
    // Capture the setVoice callback from the component
    let capturedSetVoice: ((v: SpeechSynthesisVoice) => void) | undefined;
    (useVoiceSelector as ReturnType<typeof vi.fn>).mockImplementationOnce(
      (setVoice: (v: SpeechSynthesisVoice) => void) => {
        capturedSetVoice = setVoice;
      },
    );

    const capturedUtterances: SpeechSynthesisUtterance[] = [];
    window.speechSynthesis.speak = vi.fn((u: SpeechSynthesisUtterance) =>
      capturedUtterances.push(u),
    );

    const user = userEvent.setup();
    render(<WordCard word="rain" grapheme="ai" onClick={vi.fn()} />);

    // Trigger voice selection via the captured setter
    const mockVoice = { name: "Test Voice" } as SpeechSynthesisVoice;
    act(() => {
      capturedSetVoice!(mockVoice);
    });

    await user.click(screen.getByRole("button", { name: "Word rain" }));

    expect(capturedUtterances[0]).toBeDefined();
    expect(capturedUtterances[0].voice).toBe(mockVoice);
    expect(capturedUtterances[0].rate).toBe(0.7);
  });
});
