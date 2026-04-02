import { create } from "zustand";

interface GameState {
  selectedWord?: string;
  selectedGrapheme?: string;
  selectedWordGroup?: number;
  selectedGraphemeGroup?: number;
  wordGroupIndex: number[];
  graphemeGroupIndex: number[];
  resetCount: number;
}

interface GameStore extends GameState {
  selectWord: (grapheme: string, group: number) => void;
  selectGrapheme: (grapheme: string, group: number) => void;
  /** Advance matched column indices and clear selection. */
  advanceGroups: (
    wordGroupMaxes: number[],
    graphemeGroupMaxes: number[],
  ) => void;
  reset: () => void;
}

const initialState: GameState = {
  selectedWord: undefined,
  selectedGrapheme: undefined,
  selectedWordGroup: undefined,
  selectedGraphemeGroup: undefined,
  wordGroupIndex: [0, 0, 0, 0],
  graphemeGroupIndex: [0, 0, 0, 0],
  resetCount: 0,
};

export const useGameStore = create<GameStore>((set) => ({
  ...initialState,

  selectWord: (grapheme, group) =>
    set({ selectedWord: grapheme, selectedWordGroup: group }),

  selectGrapheme: (grapheme, group) =>
    set({ selectedGrapheme: grapheme, selectedGraphemeGroup: group }),

  advanceGroups: (wordGroupMaxes, graphemeGroupMaxes) =>
    set((state) => {
      const { selectedWordGroup, selectedGraphemeGroup } = state;
      if (selectedWordGroup === undefined || selectedGraphemeGroup === undefined)
        return state;

      const newWordIdx = [...state.wordGroupIndex];
      if (newWordIdx[selectedWordGroup] < wordGroupMaxes[selectedWordGroup]) {
        newWordIdx[selectedWordGroup] += 1;
      }

      const newGraphemeIdx = [...state.graphemeGroupIndex];
      if (
        newGraphemeIdx[selectedGraphemeGroup] <
        graphemeGroupMaxes[selectedGraphemeGroup]
      ) {
        newGraphemeIdx[selectedGraphemeGroup] += 1;
      }

      return {
        wordGroupIndex: newWordIdx,
        graphemeGroupIndex: newGraphemeIdx,
        selectedWord: undefined,
        selectedGrapheme: undefined,
        selectedWordGroup: undefined,
        selectedGraphemeGroup: undefined,
      };
    }),

  reset: () =>
    set((state) => ({
      ...initialState,
      resetCount: state.resetCount + 1,
    })),
}));
