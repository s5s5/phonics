import { useGameStore } from "@/app/store/gameStore";

const initialState = {
  selectedWord: undefined,
  selectedGrapheme: undefined,
  selectedWordGroup: undefined,
  selectedGraphemeGroup: undefined,
  wordGroupIndex: [0, 0, 0, 0],
  graphemeGroupIndex: [0, 0, 0, 0],
  resetCount: 0,
};

beforeEach(() => {
  // Merge reset (false) to preserve action functions; state fields are fully overwritten.
  useGameStore.setState(initialState, false);
});

describe("selectWord", () => {
  it("sets selectedWord and selectedWordGroup", () => {
    useGameStore.getState().selectWord("ai", 2);
    const state = useGameStore.getState();
    expect(state.selectedWord).toBe("ai");
    expect(state.selectedWordGroup).toBe(2);
  });

  it("does not clear selectedGrapheme", () => {
    useGameStore.getState().selectGrapheme("oo", 1);
    useGameStore.getState().selectWord("ai", 2);
    expect(useGameStore.getState().selectedGrapheme).toBe("oo");
  });
});

describe("selectGrapheme", () => {
  it("sets selectedGrapheme and selectedGraphemeGroup", () => {
    useGameStore.getState().selectGrapheme("ch", 3);
    const state = useGameStore.getState();
    expect(state.selectedGrapheme).toBe("ch");
    expect(state.selectedGraphemeGroup).toBe(3);
  });
});

describe("advanceGroups", () => {
  it("increments word and grapheme index for selected groups", () => {
    useGameStore.setState({ selectedWordGroup: 1, selectedGraphemeGroup: 1 });
    useGameStore.getState().advanceGroups([3, 3, 3, 3], [3, 3, 3, 3]);
    const state = useGameStore.getState();
    expect(state.wordGroupIndex[1]).toBe(1);
    expect(state.graphemeGroupIndex[1]).toBe(1);
    expect(state.wordGroupIndex[0]).toBe(0); // other columns unchanged
  });

  it("clears all selections after advancing", () => {
    useGameStore.setState({
      selectedWordGroup: 0,
      selectedGraphemeGroup: 0,
      selectedWord: "cat",
      selectedGrapheme: "a",
    });
    useGameStore.getState().advanceGroups([2, 2, 2, 2], [2, 2, 2, 2]);
    const state = useGameStore.getState();
    expect(state.selectedWord).toBeUndefined();
    expect(state.selectedGrapheme).toBeUndefined();
    expect(state.selectedWordGroup).toBeUndefined();
    expect(state.selectedGraphemeGroup).toBeUndefined();
  });

  it("does not advance past the column max", () => {
    useGameStore.setState({
      selectedWordGroup: 0,
      selectedGraphemeGroup: 0,
      wordGroupIndex: [3, 0, 0, 0],
      graphemeGroupIndex: [3, 0, 0, 0],
    });
    useGameStore.getState().advanceGroups([3, 3, 3, 3], [3, 3, 3, 3]);
    expect(useGameStore.getState().wordGroupIndex[0]).toBe(3);
  });

  it("does nothing when no groups are selected", () => {
    useGameStore.getState().advanceGroups([3, 3, 3, 3], [3, 3, 3, 3]);
    const state = useGameStore.getState();
    expect(state.wordGroupIndex).toEqual([0, 0, 0, 0]);
    expect(state.graphemeGroupIndex).toEqual([0, 0, 0, 0]);
  });
});

describe("reset", () => {
  it("resets all state to initial values", () => {
    useGameStore.setState({
      selectedWord: "rain",
      selectedGrapheme: "ai",
      wordGroupIndex: [2, 3, 1, 2],
      graphemeGroupIndex: [1, 2, 0, 3],
      resetCount: 5,
    });
    useGameStore.getState().reset();
    const state = useGameStore.getState();
    expect(state.selectedWord).toBeUndefined();
    expect(state.wordGroupIndex).toEqual([0, 0, 0, 0]);
    expect(state.graphemeGroupIndex).toEqual([0, 0, 0, 0]);
  });

  it("increments resetCount on each reset", () => {
    useGameStore.setState({ resetCount: 3 });
    useGameStore.getState().reset();
    expect(useGameStore.getState().resetCount).toBe(4);
    useGameStore.getState().reset();
    expect(useGameStore.getState().resetCount).toBe(5);
  });
});
