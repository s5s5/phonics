import { CATEGORY_TO_SLUG, SLUG_TO_CATEGORY } from "@/app/constants/categorySlug";

describe("CATEGORY_TO_SLUG", () => {
  it("has exactly 5 entries", () => {
    expect(Object.keys(CATEGORY_TO_SLUG)).toHaveLength(5);
  });

  it.each([
    ["Alphabet", "alphabet"],
    ["ShortVowel+", "shortvowel"],
    ["LongVowel+", "longvowel"],
    ["Consonant+", "consonant"],
    ["Other", "other"],
  ])("maps %s → %s", (category, slug) => {
    expect(CATEGORY_TO_SLUG[category]).toBe(slug);
  });

  it("returns undefined for unknown category", () => {
    expect(CATEGORY_TO_SLUG["Unknown"]).toBeUndefined();
  });
});

describe("SLUG_TO_CATEGORY", () => {
  it("has exactly 5 entries", () => {
    expect(Object.keys(SLUG_TO_CATEGORY)).toHaveLength(5);
  });

  it.each([
    ["alphabet", "Alphabet"],
    ["shortvowel", "ShortVowel+"],
    ["longvowel", "LongVowel+"],
    ["consonant", "Consonant+"],
    ["other", "Other"],
  ])("maps %s → %s", (slug, category) => {
    expect(SLUG_TO_CATEGORY[slug]).toBe(category);
  });

  it("returns undefined for unknown slug", () => {
    expect(SLUG_TO_CATEGORY["bogus"]).toBeUndefined();
  });
});

describe("bidirectional consistency", () => {
  it("every slug maps back to its original category", () => {
    Object.entries(CATEGORY_TO_SLUG).forEach(([category, slug]) => {
      expect(SLUG_TO_CATEGORY[slug]).toBe(category);
    });
  });

  it("every category maps back to its original slug", () => {
    Object.entries(SLUG_TO_CATEGORY).forEach(([slug, category]) => {
      expect(CATEGORY_TO_SLUG[category]).toBe(slug);
    });
  });
});
