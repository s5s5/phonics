import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { Navigation } from "@/app/components/Navigation";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

beforeEach(() => {
  mockPush.mockClear();
});

describe("Navigation", () => {
  it("renders all 5 category labels", () => {
    render(<Navigation currentSlug="alphabet" />);
    expect(screen.getByText("Alphabet")).toBeInTheDocument();
    expect(screen.getByText("ShortVowel+")).toBeInTheDocument();
    expect(screen.getByText("LongVowel+")).toBeInTheDocument();
    expect(screen.getByText("Consonant+")).toBeInTheDocument();
    expect(screen.getByText("Other")).toBeInTheDocument();
  });

  it("navigates to /poster/alphabet on Alphabet click", async () => {
    const user = userEvent.setup();
    render(<Navigation currentSlug="shortvowel" />);
    await user.click(screen.getByText("Alphabet"));
    expect(mockPush).toHaveBeenCalledWith("/poster/alphabet");
  });

  it("navigates to /poster/shortvowel on ShortVowel+ click", async () => {
    const user = userEvent.setup();
    render(<Navigation currentSlug="alphabet" />);
    await user.click(screen.getByText("ShortVowel+"));
    expect(mockPush).toHaveBeenCalledWith("/poster/shortvowel");
  });

  it("navigates to /poster/longvowel on LongVowel+ click", async () => {
    const user = userEvent.setup();
    render(<Navigation currentSlug="alphabet" />);
    await user.click(screen.getByText("LongVowel+"));
    expect(mockPush).toHaveBeenCalledWith("/poster/longvowel");
  });

  it("navigates to /poster/consonant on Consonant+ click", async () => {
    const user = userEvent.setup();
    render(<Navigation currentSlug="alphabet" />);
    await user.click(screen.getByText("Consonant+"));
    expect(mockPush).toHaveBeenCalledWith("/poster/consonant");
  });

  it("navigates to /poster/other on Other click", async () => {
    const user = userEvent.setup();
    render(<Navigation currentSlug="alphabet" />);
    await user.click(screen.getByText("Other"));
    expect(mockPush).toHaveBeenCalledWith("/poster/other");
  });

  it("applies underline style to active category", () => {
    render(<Navigation currentSlug="longvowel" />);
    const activeItem = screen.getByText("LongVowel+");
    expect(activeItem.className).toContain("underline");
    expect(activeItem.className).toContain("font-bold");
  });

  it("does not apply bold to inactive categories", () => {
    render(<Navigation currentSlug="longvowel" />);
    const inactiveItem = screen.getByText("Alphabet");
    expect(inactiveItem.className).not.toContain("font-bold");
  });
});
