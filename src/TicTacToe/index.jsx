import React, { useState } from "react";
import "./style.css";
const boardArr = [
  {
    position: 1,
    value: "",
  },
  {
    position: 2,
    value: "",
  },
  {
    position: 3,
    value: "",
  },
  {
    position: 4,
    value: "",
  },
  {
    position: 5,
    value: "",
  },
  {
    position: 6,
    value: "",
  },
  {
    position: 7,
    value: "",
  },
  {
    position: 8,
    value: "",
  },
  {
    position: 9,
    value: "",
  },
];
function TicTacToe() {
  //   const [value, setValue] = useState(null);
  const [board, setBoard] = useState(boardArr);

  function handleClick(position, val = "X") {
    const updated = [...board];

    updated[position - 1] = { position, value: val === "X" ? "O" : "X" };
    setBoard(updated);
  }

  return (
    <div>
      <h1>Game</h1>
      <div className="board">
        {board.map((val, index) => (
          <div
            key={index}
            className="box"
            onClick={() => handleClick(val.position, val.value)}
          >
            {val.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
