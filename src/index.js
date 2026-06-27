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

function knightMoves(startPos, endPos) {
  let pathObject = {
    mother: null,
    child: null,
  };
  pathObject.child = startPos;
  let queue = [{ mother: null, child: startPos }];
  let visited = [startPos];
  let path = [];
  while (queue.length > 0) {
    const firstElement = queue.shift().child;
    const node = new Node(firstElement);

    for (const nextMove of node.nextMovesList) {
      if (
        !visited.some(
          (item) => item[0] === nextMove[0] && item[1] === nextMove[1],
        )
      ) {
        visited.push(nextMove);

        queue.push({ mother: firstElement, child: nextMove });
        path.push({ mother: firstElement, child: nextMove });

        if (nextMove[0] === endPos[0] && nextMove[1] === endPos[1]) {
          let result = [];
          let currentChild = nextMove;
          for (let i = path.length - 1; i >= 0; i--) {
            const temp = path[i].child;
            if (temp === currentChild) {
              result.push(path[i].child);
              currentChild = path[i].mother;
            }
          }
          result.push(startPos);
          return result.reverse();
        }
      }
    }
  }
}
console.table(knightMoves([0, 0], [3, 3]));
export { Node, knightMoves };
