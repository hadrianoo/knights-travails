class Node {
  constructor(knightPosition) {
    this.knightPosition = knightPosition;
    this.nextMovesList = [];
    this.generatePossibleMoves();
  }
  #addMove(posX, posY) {
    if (posX >= 0 && posY >= 0 && posX <= 7 && posY <= 7)
      this.nextMovesList.push([posX, posY]);
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
function createPath(move, path, startPos) {
  let result = [];
  for (let i = path.length - 1; i >= 0; i--) {
    if (path[i].currentPos === move) {
      result.push(path[i].currentPos);
      move = path[i].lastPos;
    }
  }
  result.push(startPos);
  return result.reverse();
}

function knightMoves(startPos, endPos) {
  let queue = [{ lastPos: null, currentPos: startPos }];
  let visited = new Set(startPos);
  let path = [];

  while (queue.length > 0) {
    const firstElement = queue.shift().currentPos;
    const node = new Node(firstElement);

    for (const nextMove of node.nextMovesList) {
      if (!visited.has(`${nextMove[0]},${nextMove[1]}`)) {
        visited.add(nextMove);

        queue.push({ lastPos: firstElement, currentPos: nextMove });
        path.push({ lastPos: firstElement, currentPos: nextMove });

        if (nextMove[0] === endPos[0] && nextMove[1] === endPos[1]) {
          return createPath(nextMove, path, startPos);
        }
      }
    }
  }
}
console.table(knightMoves([3, 3], [4, 3]));
export { Node, knightMoves };
