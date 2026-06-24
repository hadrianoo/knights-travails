import { Knight, knightMoves } from "./index.js";
describe("test Knight class", () => {
  test("populate possibleMovesList with all possible moves", () => {
    const knightPos = new Knight([3, 3]);
    knightPos.generatePossibleMoves();
    expect(knightPos.possibleMovesList).toEqual([
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
    const knightPos = new Knight([0, 0]);
    knightPos.generatePossibleMoves();
    expect(knightPos.possibleMovesList).toEqual([
      [1, 2],
      [2, 1],
    ]);
  });
  test("populate possibleMovesList with all possible moves, allow only values <= 7", () => {
    const knightPos = new Knight([6, 6]);
    knightPos.generatePossibleMoves();
    expect(knightPos.possibleMovesList).toEqual([
      [7, 4],
      [5, 4],
      [4, 5],
      [4, 7],
    ]);
  });
});
