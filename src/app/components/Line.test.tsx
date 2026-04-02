import { render } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { Line } from "@/app/components/Line";

vi.mock("framer-motion", () => ({
  motion: {
    svg: ({
      children,
      viewBox,
      className,
    }: React.SVGAttributes<SVGSVGElement> & { className?: string }) => (
      <svg viewBox={viewBox} className={className}>
        {children}
      </svg>
    ),
    line: (props: React.SVGAttributes<SVGLineElement>) => <line {...props} />,
  },
}));

describe("Line", () => {
  it("renders an SVG element", () => {
    const { container } = render(<Line completedCount={0} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders a line element inside the SVG", () => {
    const { container } = render(<Line completedCount={0} />);
    expect(container.querySelector("line")).toBeInTheDocument();
  });

  it("renders without from/to props", () => {
    const { container } = render(<Line completedCount={0} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with from and to props", () => {
    const { container } = render(<Line from={1} to={2} completedCount={0} />);
    expect(container.querySelector("line")).toBeInTheDocument();
  });

  it("renders when completedCount changes", () => {
    const { container, rerender } = render(<Line completedCount={0} />);
    rerender(<Line completedCount={1} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
