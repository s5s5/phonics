import { renderHook, act } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import useHowler from "@/app/hooks/useHowler";

// These are initialized inside vi.mock and accessed via the getter below.
// All vi.fn() calls are inside the factory so hoisting is not an issue.
vi.mock("howler", () => {
  const mockPlay = vi.fn();
  const mockStop = vi.fn();
  const mockUnload = vi.fn();

  const MockHowl = vi.fn(function MockHowlCtor(this: Record<string, unknown>) {
    this.play = mockPlay;
    this.stop = mockStop;
    this.unload = mockUnload;
  });

  // Stash the per-instance mocks on the constructor for test access
  (MockHowl as unknown as Record<string, unknown>).__play = mockPlay;
  (MockHowl as unknown as Record<string, unknown>).__stop = mockStop;
  (MockHowl as unknown as Record<string, unknown>).__unload = mockUnload;

  return { Howl: MockHowl };
});

// Dynamic import so we get the mocked version after vi.mock runs
async function getHowlMock() {
  const { Howl } = await import("howler");
  return Howl as unknown as ReturnType<typeof vi.fn> & {
    __play: ReturnType<typeof vi.fn>;
    __stop: ReturnType<typeof vi.fn>;
    __unload: ReturnType<typeof vi.fn>;
  };
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("useHowler", () => {
  it("returns a play function", () => {
    const { result } = renderHook(() => useHowler());
    expect(typeof result.current.play).toBe("function");
  });

  it("creates a Howl instance when play is called with a phoneme", async () => {
    const MockHowl = await getHowlMock();
    const { result } = renderHook(() => useHowler());
    act(() => { result.current.play("æ"); });
    expect(MockHowl).toHaveBeenCalledTimes(1);
    expect(MockHowl).toHaveBeenCalledWith(
      expect.objectContaining({ src: ["/sound/æ.mp3"], autoplay: true })
    );
  });

  it("does nothing when called with an empty string", async () => {
    const MockHowl = await getHowlMock();
    const { result } = renderHook(() => useHowler());
    act(() => { result.current.play(""); });
    expect(MockHowl).not.toHaveBeenCalled();
  });

  it("calls stop+play on existing Howl when same phoneme replayed", async () => {
    const MockHowl = await getHowlMock();
    const { result } = renderHook(() => useHowler());
    act(() => { result.current.play("æ"); });
    act(() => { result.current.play("æ"); });
    expect(MockHowl).toHaveBeenCalledTimes(1); // no new Howl created
    expect(MockHowl.__stop).toHaveBeenCalled();
    expect(MockHowl.__play).toHaveBeenCalled();
  });

  it("creates a new Howl and unloads previous when phoneme changes", async () => {
    const MockHowl = await getHowlMock();
    const { result } = renderHook(() => useHowler());
    act(() => { result.current.play("æ"); });
    act(() => { result.current.play("ɑ"); });
    expect(MockHowl).toHaveBeenCalledTimes(2);
    expect(MockHowl.__stop).toHaveBeenCalled();
    expect(MockHowl.__unload).toHaveBeenCalled();
  });

  it("unloads sound on hook unmount", async () => {
    const MockHowl = await getHowlMock();
    const { result, unmount } = renderHook(() => useHowler());
    act(() => { result.current.play("æ"); });
    unmount();
    expect(MockHowl.__stop).toHaveBeenCalled();
    expect(MockHowl.__unload).toHaveBeenCalled();
  });

  it("logs a console.warn when audio fails to load", async () => {
    const MockHowl = await getHowlMock();
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const { result } = renderHook(() => useHowler());
    act(() => { result.current.play("æ"); });

    // Retrieve the onloaderror callback passed to the Howl constructor
    const constructorOptions = MockHowl.mock.calls[0][0] as {
      onloaderror: (id: number, err: unknown) => void;
    };
    constructorOptions.onloaderror(1, "network error");

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('"æ"'),
      "network error",
    );
    warnSpy.mockRestore();
  });
});
