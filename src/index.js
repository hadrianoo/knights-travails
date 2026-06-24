class Node {
  constructor(knightPosition) {
    this.knightPosition = knightPosition;
    this.possibleMovesList = [];
  }
  #addMove(posX, posY) {
    if (posX >= 0 && posY >= 0 && posX <= 7 && posY <= 7)
      this.possibleMovesList.push([posX, posY]);
  }

  generatePossibleMoves() {
    const [x, y] = this.knightPosition;
    this.#addMove(x + 1, y + 2);
    this.#addMove(x + 2, y + 1);
    this.#addMove(x + 2, y - 1);
    this.#addMove(x + 1, y - 2);
    this.#addMove(x - 1, y - 2);
    this.#addMove(x - 2, y - 1);
    this.#addMove(x - 2, y + 1);
    this.#addMove(x - 1, y + 2);
  }
}

function knightMoves(startPos, endPos) {
  const startNode = new Node(startPos);
  startNode.generatePossibleMoves();
  let queue = [];
  let visitedList = [];

  queue.push(...startNode.possibleMovesList);

  return queue;
}

export { Node, knightMoves };
