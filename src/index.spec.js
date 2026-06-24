import { Node, knightMoves } from "./index.js";
describe("test Node class", () => {
  const knightPos = new Node([0, 0]);
  test("add moves to possibleMovesList", () => {
    knightPos.addMove([1, 0]);
    expect(knightPos.possibleMovesList).toEqual([[1, 0]]);
  });
});
