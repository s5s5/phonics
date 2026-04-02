export type Word = {
  rank: number;
  word: string;
  pronunciation?: (string | { style: string; text: string })[][];
  chinese_meanings?: string;
};

export type Phonics = {
  phoneme: string;
  grapheme: string;
  graphemeType: string;
  pronunciation?: string;
  tips?: string;
  words: Word[];
};

