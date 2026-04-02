import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect } from "vitest";
import { GraphemeCard } from "@/app/components/GraphemeCard";

describe("GraphemeCard", () => {
  it("renders the grapheme text", () => {
    render(<GraphemeCard grapheme="ai" onClick={vi.fn()} />);
    expect(screen.getByText("ai")).toBeInTheDocument();
  });

  it("renders pronunciation when provided", () => {
    render(<GraphemeCard grapheme="ai" pronunciation="eɪ" onClick={vi.fn()} />);
    expect(screen.getByText(/eɪ/)).toBeInTheDocument();
  });

  it("wraps pronunciation in slashes", () => {
    render(<GraphemeCard grapheme="ai" pronunciation="eɪ" onClick={vi.fn()} />);
    // The pronunciation div renders as /eɪ/
    const pronunciationDiv = screen.getByText(/\/eɪ\//);
    expect(pronunciationDiv).toBeInTheDocument();
  });

  it("does not render pronunciation when not provided", () => {
    render(<GraphemeCard grapheme="ai" onClick={vi.fn()} />);
    expect(screen.queryByText(/\//)).not.toBeInTheDocument();
  });

  it("renders pronunciation with underscore as two parts with italic span", () => {
    render(
      <GraphemeCard grapheme="ou" pronunciation="aʊ_ɪ" onClick={vi.fn()} />
    );
    // partOne is plain text, partTwo is italic
    expect(screen.getByText(/aʊ/)).toBeInTheDocument();
    const italicSpan = screen.getByText("ɪ");
    expect(italicSpan.tagName).toBe("SPAN");
    expect(italicSpan).toHaveClass("italic");
  });

  it("has correct aria-label", () => {
    render(<GraphemeCard grapheme="ai" onClick={vi.fn()} />);
    expect(screen.getByRole("button", { name: "Grapheme ai" })).toBeInTheDocument();
  });

  it("has aria-pressed false when not selected", () => {
    render(<GraphemeCard grapheme="ai" onClick={vi.fn()} selected={false} />);
    const card = screen.getByRole("button", { name: "Grapheme ai" });
    expect(card).toHaveAttribute("aria-pressed", "false");
  });

  it("has aria-pressed true when selected", () => {
    render(<GraphemeCard grapheme="ai" onClick={vi.fn()} selected={true} />);
    const card = screen.getByRole("button", { name: "Grapheme ai" });
    expect(card).toHaveAttribute("aria-pressed", "true");
  });

  it("applies selected CSS class when selected", () => {
    render(<GraphemeCard grapheme="ai" onClick={vi.fn()} selected={true} />);
    const card = screen.getByRole("button", { name: "Grapheme ai" });
    expect(card).toHaveClass("bg-indigo-500");
  });

  it("does not apply selected CSS class when not selected", () => {
    render(<GraphemeCard grapheme="ai" onClick={vi.fn()} selected={false} />);
    const card = screen.getByRole("button", { name: "Grapheme ai" });
    expect(card).not.toHaveClass("bg-indigo-500");
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<GraphemeCard grapheme="ai" onClick={onClick} />);
    const card = screen.getByRole("button", { name: "Grapheme ai" });
    await user.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("calls onClick when Enter key is pressed", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<GraphemeCard grapheme="ai" onClick={onClick} />);
    const card = screen.getByRole("button", { name: "Grapheme ai" });
    card.focus();
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("calls onClick when Space key is pressed", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<GraphemeCard grapheme="ai" onClick={onClick} />);
    const card = screen.getByRole("button", { name: "Grapheme ai" });
    card.focus();
    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("has tabIndex 0 for keyboard accessibility", () => {
    render(<GraphemeCard grapheme="ai" onClick={vi.fn()} />);
    const card = screen.getByRole("button", { name: "Grapheme ai" });
    expect(card).toHaveAttribute("tabindex", "0");
  });
});
