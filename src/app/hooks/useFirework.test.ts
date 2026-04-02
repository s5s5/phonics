import { renderHook } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";

const mockFirework = vi.fn();
vi.mock("mouse-firework", () => ({ default: mockFirework }));

import useFirework from "@/app/hooks/useFirework";

beforeEach(() => {
  mockFirework.mockClear();
});

describe("useFirework", () => {
  it("calls mouse-firework with excludeElements on mount", async () => {
    renderHook(() => useFirework());
    await vi.waitFor(() => {
      expect(mockFirework).toHaveBeenCalledTimes(1);
    });
    expect(mockFirework).toHaveBeenCalledWith(
      expect.objectContaining({ excludeElements: ["a", "button", "h2"] }),
    );
  });

  it("only initializes mouse-firework once (no re-init on rerender)", async () => {
    const { rerender } = renderHook(() => useFirework());
    await vi.waitFor(() => expect(mockFirework).toHaveBeenCalledTimes(1));
    rerender();
    expect(mockFirework).toHaveBeenCalledTimes(1);
  });
});
