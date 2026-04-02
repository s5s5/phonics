import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { PageLayout } from "@/app/components/PageLayout";

vi.mock("@/app/hooks/useFirework", () => ({ default: vi.fn() }));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...(props as object)}>
      {children}
    </a>
  ),
}));

const defaultProps = {
  modeHref: "/poster",
  modeEmoji: "📖",
  modeLabel: "Switch to Poster",
  meaningContent: null,
};

describe("PageLayout", () => {
  it("renders children", () => {
    render(
      <PageLayout {...defaultProps}>
        <div>child content</div>
      </PageLayout>,
    );
    expect(screen.getByText("child content")).toBeInTheDocument();
  });

  it("renders the Phonics heading", () => {
    render(
      <PageLayout {...defaultProps}>
        <span />
      </PageLayout>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Phonics/,
    );
  });

  it("renders the mode link with correct href and aria-label", () => {
    render(
      <PageLayout {...defaultProps}>
        <span />
      </PageLayout>,
    );
    const link = screen.getByRole("link", { name: "Switch to Poster" });
    expect(link).toHaveAttribute("href", "/poster");
  });

  it("renders the mode emoji inside the link", () => {
    render(
      <PageLayout {...defaultProps}>
        <span />
      </PageLayout>,
    );
    expect(screen.getByText("📖")).toBeInTheDocument();
  });

  it("renders meaningContent when provided", () => {
    render(
      <PageLayout
        {...defaultProps}
        meaningContent={<div>meaning tooltip</div>}
      >
        <span />
      </PageLayout>,
    );
    expect(screen.getByText("meaning tooltip")).toBeInTheDocument();
  });

  it("renders footer attribution text", () => {
    render(
      <PageLayout {...defaultProps}>
        <span />
      </PageLayout>,
    );
    expect(screen.getByText(/Flaticon/)).toBeInTheDocument();
  });
});
