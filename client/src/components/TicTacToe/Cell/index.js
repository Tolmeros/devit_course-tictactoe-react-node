import React from "react";
import imgX from "../img_X.png"
import imgO from "../img_O.png"


// move to separate component
const playerMark = (player) => {
  if (player === 'x') {
    return <img src={imgX} alt="X" />;
    //return <img src="../img_X.png" alt="X" />;
  }
  if (player === 'o') {
    return <img src={imgO} alt="O" />;
    //return <img src="../img_O.png" alt="O" />;
  }
  return null;
};

const Cell = ({num, value, handleClick}) => {
  return <td onClick={() => handleClick(num)}>{playerMark(value)}</td>;
};

export default Cell;