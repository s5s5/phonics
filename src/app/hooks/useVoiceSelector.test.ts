import { renderHook } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import useVoiceSelector from "@/app/hooks/useVoiceSelector";

const makeVoice = (name: string) => ({ name, lang: "en-US" } as SpeechSynthesisVoice);

let mockGetVoices: ReturnType<typeof vi.fn>;

beforeEach(() => {
  mockGetVoices = vi.fn(() => []);
  Object.defineProperty(window, "speechSynthesis", {
    value: { getVoices: mockGetVoices },
    writable: true,
    configurable: true,
  });
});

afterEach(() => { vi.restoreAllMocks(); });

describe("useVoiceSelector", () => {
  it("selects Samantha voice when available", () => {
    const voices = [makeVoice("Alex"), makeVoice("Samantha")];
    mockGetVoices.mockReturnValue(voices);
    const setVoice = vi.fn();
    renderHook(() => useVoiceSelector(setVoice));
    expect(setVoice).toHaveBeenCalledWith(voices[1]);
  });

  it("selects Google US English when Samantha is absent", () => {
    const voices = [makeVoice("Alex"), makeVoice("Google US English")];
    mockGetVoices.mockReturnValue(voices);
    const setVoice = vi.fn();
    renderHook(() => useVoiceSelector(setVoice));
    expect(setVoice).toHaveBeenCalledWith(voices[1]);
  });

  it("falls back to voices[0] when no preferred voice found", () => {
    const voices = [makeVoice("Alex"), makeVoice("Karen")];
    mockGetVoices.mockReturnValue(voices);
    const setVoice = vi.fn();
    renderHook(() => useVoiceSelector(setVoice));
    expect(setVoice).toHaveBeenCalledWith(voices[0]);
  });

  it("does not call setVoice when voices list is empty", () => {
    mockGetVoices.mockReturnValue([]);
    const setVoice = vi.fn();
    renderHook(() => useVoiceSelector(setVoice));
    expect(setVoice).not.toHaveBeenCalled();
  });

  it("matches voice name case-insensitively", () => {
    const voices = [makeVoice("SAMANTHA")];
    mockGetVoices.mockReturnValue(voices);
    const setVoice = vi.fn();
    renderHook(() => useVoiceSelector(setVoice));
    expect(setVoice).toHaveBeenCalledWith(voices[0]);
  });

  it("does not call setVoice a second time on rerender", () => {
    const voices = [makeVoice("Samantha")];
    mockGetVoices.mockReturnValue(voices);
    const setVoice = vi.fn();
    const { rerender } = renderHook(() => useVoiceSelector(setVoice));
    rerender();
    expect(setVoice).toHaveBeenCalledTimes(1);
  });
});
