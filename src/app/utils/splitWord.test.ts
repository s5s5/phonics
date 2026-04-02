import { splitWord } from "@/app/utils/splitWord";

describe("splitWord — simple grapheme (no underscore)", () => {
  it("highlights grapheme at the start of the word", () => {
    const result = splitWord("apple", "a");
    expect(result).toEqual([
      { word: "" },
      { word: "a", highLight: true },
      { word: "pple" },
    ]);
  });

  it("highlights grapheme in the middle of the word", () => {
    const result = splitWord("rain", "ai");
    expect(result).toEqual([
      { word: "r" },
      { word: "ai", highLight: true },
      { word: "n" },
    ]);
  });

  it("highlights grapheme at the end of the word", () => {
    const result = splitWord("book", "ook");
    expect(result).toEqual([
      { word: "b" },
      { word: "ook", highLight: true },
      { word: "" },
    ]);
  });

  it("returns 3 segments for simple grapheme", () => {
    expect(splitWord("cat", "a")).toHaveLength(3);
  });

  it("returns first segment as non-highlighted when not found", () => {
    const result = splitWord("dog", "x");
    // indexOf returns -1 when not found; slice(0,-1) yields all but last char
    expect(result[0]).toEqual({ word: "do" });
  });
});

describe("splitWord — compound grapheme with underscore", () => {
  it("highlights both parts of c_k pattern in 'clock'", () => {
    const result = splitWord("clock", "c_k");
    expect(result).toHaveLength(5);
    expect(result[1]).toEqual({ word: "c", highLight: true });
    expect(result[3]).toEqual({ word: "k", highLight: true });
  });

  it("middle segment contains characters between highlighted parts", () => {
    const result = splitWord("clock", "c_k");
    // regex c.k matches "coc" at index 1 in "clock"; after removing "c" and "k", middle is ""
    expect(result[2].word).toBe("");
    expect(result[2].highLight).toBeUndefined();
  });
});
