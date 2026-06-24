class Node {
  constructor(knightPosition) {
    this.knightPosition = knightPosition;
    this.possibleMovesList = [];
  }
  addMove(newPosition) {
    this.possibleMovesList.push(newPosition);
  }
}

function knightMoves() {}

export { Node, knightMoves };
