import React, { useState } from "react";
import "./style.css";

const WINNER_PATTERN = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const initialBoard = Array(9).fill(null);
function TicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [isNext, setIsNext] = useState(true);

  function handleClick(index) {
    if (calaulateWinner(board)) {
      return;
    }
    const updated = [...board];
    updated[index] = isNext ? "X" : "O";
    setBoard(updated);
    setIsNext(!isNext);
  }

  function calaulateWinner(currentBoard) {
    let result = null;
    for (let i = 0; i < WINNER_PATTERN.length; i++) {
      const [a, b, c] = WINNER_PATTERN[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        result = currentBoard[a];
      }
      // else {
      //   result = "Draw";
      // }
    }
    return result;
  }

  function getGameStatus() {
    const winner = calaulateWinner(board);
    if (winner === "X" || winner === "O") {
      return `Player ${winner} Wins!`;
    } else if (winner === "Draw") {
      return `Game Draw`;
    }
    return `Player ${isNext ? "X" : "O"} turn`;
  }

  const handleReset = () => {
    setBoard(initialBoard);
    setIsNext(true);
  };

  return (
    <div>
      <h1>Game</h1>
      <h4>{getGameStatus()}</h4>

      <div className="board">
        {board.map((val, index) => (
          <button
            key={index}
            className="box"
            onClick={() => handleClick(index)}
            disabled={val !== null}
          >
            {val}
          </button>
        ))}
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
