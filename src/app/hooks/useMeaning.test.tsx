import { renderHook, act } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import useMeaning from "@/app/hooks/useMeaning";

beforeEach(() => { vi.useFakeTimers(); });
afterEach(() => { vi.useRealTimers(); });

describe("useMeaning", () => {
  it("returns null meaningContent initially", () => {
    const { result } = renderHook(() => useMeaning());
    expect(result.current.meaningContent).toBeNull();
  });

  it("sets meaningContent when showMeaning is called", () => {
    const { result } = renderHook(() => useMeaning());
    act(() => {
      result.current.showMeaning({ word: "apple", chinese_meanings: "苹果" });
    });
    expect(result.current.meaningContent).not.toBeNull();
  });

  it("meaningContent disappears after 3000ms", () => {
    const { result } = renderHook(() => useMeaning());
    act(() => { result.current.showMeaning({ word: "rain" }); });
    expect(result.current.meaningContent).not.toBeNull();
    act(() => { vi.advanceTimersByTime(3000); });
    expect(result.current.meaningContent).toBeNull();
  });

  it("does not disappear before 3000ms", () => {
    const { result } = renderHook(() => useMeaning());
    act(() => { result.current.showMeaning({ word: "rain" }); });
    act(() => { vi.advanceTimersByTime(2999); });
    expect(result.current.meaningContent).not.toBeNull();
  });

  it("resets the timer when showMeaning is called again", () => {
    const { result } = renderHook(() => useMeaning());
    act(() => { result.current.showMeaning({ word: "apple" }); });
    act(() => { vi.advanceTimersByTime(2000); });
    act(() => { result.current.showMeaning({ word: "rain" }); }); // reset timer
    act(() => { vi.advanceTimersByTime(2000); }); // total 4s from first, 2s from second
    expect(result.current.meaningContent).not.toBeNull(); // still visible
    act(() => { vi.advanceTimersByTime(1000); }); // now 3s since second call
    expect(result.current.meaningContent).toBeNull();
  });

  it("returns a stable showMeaning reference across rerenders", () => {
    const { result, rerender } = renderHook(() => useMeaning());
    const first = result.current.showMeaning;
    rerender();
    expect(result.current.showMeaning).toBe(first);
  });
});
