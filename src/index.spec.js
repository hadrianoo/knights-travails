import { getPossibleMoves, knightMoves } from "./index.js";
describe("test Node class", () => {
  test("populate possibleMovesList with all possible moves", () => {
    expect(getPossibleMoves([3, 3])).toEqual([
      [4, 5],
      [5, 4],
      [5, 2],
      [4, 1],
      [2, 1],
      [1, 2],
      [1, 4],
      [2, 5],
    ]);
  });
  test("populate possibleMovesList with all possible moves, allow only positive values", () => {
    expect(getPossibleMoves([0, 0])).toEqual([
      [1, 2],
      [2, 1],
    ]);
  });
  test("populate possibleMovesList with all possible moves, allow only values <= 7", () => {
    expect(getPossibleMoves([6, 6])).toEqual([
      [7, 4],
      [5, 4],
      [4, 5],
      [4, 7],
    ]);
  });
});
describe("test knightMoves function", () => {
  test("return correct path", () => {
    expect(knightMoves([0, 0], [7, 7])).toEqual([
      [0, 0],
      [1, 2],
      [2, 4],
      [3, 6],
      [5, 7],
      [6, 5],
      [7, 7],
    ]);
  });
  test("return correct path", () => {
    expect(knightMoves([0, 0], [3, 3])).toEqual([
      [0, 0],
      [1, 2],
      [3, 3],
    ]);
  });
  test("return correct path", () => {
    expect(knightMoves([3, 3], [4, 3])).toEqual([
      [3, 3],
      [4, 5],
      [6, 4],
      [4, 3],
    ]);
  });
});
