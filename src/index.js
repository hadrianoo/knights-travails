class Node {
  constructor(knightPosition) {
    this.knightPosition = knightPosition;
    this.possibleMovesList = [];
    this.generatePossibleMoves();
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
  let queue = [startPos];
  let visited = [startPos];
  let path = [];
  while (queue.length > 0) {
    const firstElement = queue.shift();
    const node = new Node(firstElement);

    if (firstElement[0] === endPos[0] && firstElement[1] === endPos[1])
      return path;
    for (const possibleMove of node.possibleMovesList) {
      if (
        !visited.some(
          (item) => item[0] === possibleMove[0] && item[1] === possibleMove[1],
        )
      ) {
        visited.push(possibleMove);
        queue.push(possibleMove);
      }
    }

    path.push(firstElement);
  }
}
console.table(knightMoves([0, 0], [7, 7]));
export { Node, knightMoves };
