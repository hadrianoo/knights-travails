function getPossibleMoves(position) {
  const offset = [
    [+1, +2],
    [+2, +1],
    [+2, -1],
    [+1, -2],
    [-1, -2],
    [-2, -1],
    [-2, +1],
    [-1, +2],
  ];
  let moveList = [];
  const [x, y] = position;
  for (const [offsetX, offsetY] of offset) {
    if (
      offsetX + x >= 0 &&
      offsetY + y >= 0 &&
      offsetX + x <= 7 &&
      offsetY + y <= 7
    )
      moveList.push([offsetX + x, offsetY + y]);
  }
  return moveList;
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
  if (startPos[0] === endPos[0] && startPos[1] === endPos[1])
    return [startPos, endPos];
  let queue = [{ lastPos: null, currentPos: startPos }];
  let visited = new Set(startPos);
  let path = [];

  while (queue.length > 0) {
    const firstElement = queue.shift().currentPos;

    for (const nextMove of getPossibleMoves(firstElement)) {
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

export { getPossibleMoves, knightMoves };
