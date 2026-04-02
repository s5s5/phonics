export type { Word, Phonics } from "./types";
export { ALPHABET_LIST } from "./alphabet";
export { SHORT_VOWEL_LIST } from "./shortVowels";
export { LONG_VOWEL_LIST } from "./longVowels";
export { CONSONANT_LIST } from "./consonants";
export { OTHER_LIST } from "./other";

import { ALPHABET_LIST } from "./alphabet";
import { SHORT_VOWEL_LIST } from "./shortVowels";
import { LONG_VOWEL_LIST } from "./longVowels";
import { CONSONANT_LIST } from "./consonants";
import { OTHER_LIST } from "./other";

export const PHONICS_LIST = [
  ...ALPHABET_LIST,
  ...SHORT_VOWEL_LIST,
  ...LONG_VOWEL_LIST,
  ...CONSONANT_LIST,
  ...OTHER_LIST,
];
