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

function knightMoves(
  startPos,
  endPos,
  queue = [],
  visitedList = [],
  path = [],
) {
  path.push(startPos);
  console.log(startPos, endPos);
  if (startPos[0] === endPos[0] && startPos[1] === endPos[1]) return;

  // if (visitedList.includes(startPos)) return;
  const currentNode = new Node(startPos);
  currentNode.generatePossibleMoves();
  queue.push(...currentNode.possibleMovesList);
  // const firstElement = queue.shift();
  let firstElement = null;
  for (let i = 0; i < queue.length; i++) {
    const element = queue.shift();
    if (!visitedList.includes(element)) {
      firstElement = element;
      break;
    }
  }

  visitedList.push(startPos);
  knightMoves(firstElement, endPos, queue, visitedList, path);
  return path;
}
console.table(knightMoves([0, 0], [3, 3]));
export { Node, knightMoves };
