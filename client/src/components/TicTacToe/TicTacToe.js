import React, {useCallback, useMemo, useEffect} from 'react';
import {Navigate} from 'react-router-dom';

import styles from './styles.module.css';
import Table from "./Table";

const combos = {
  horizontal: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ],
  vertical: [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ],
  diagonal: [
    [0, 4, 8],
    [2, 4, 6],
  ],
};

const checkForWinner = (squares) => {
  for (let combo in combos) {
    for (let pattern of combos[combo]) {
      if (
        squares[pattern[0]] === squares[pattern[1]] &&
        squares[pattern[1]] === squares[pattern[2]] &&
        squares[pattern[0]] !== ''
      ) {
        return squares[pattern[0]];
      }
    }
  }

  return null;
};

const TicTacToe = ({game, gameLoadingError, newGame, gameState, makeTurn}) => {
  const handleClick = useCallback((num) => {
    if (game.draw || game.winner) {
      alert('Game ended');
      return;
    }

    if (game.cells[num] !== '') {
      alert('Already clicked');
      return;
    }

    makeTurn({cell: num, player: game.currentTurn});
  }, [game, makeTurn]);

  const handleRestart = useCallback(
    () => {
      newGame();
    },
    [newGame]
  );

  useEffect(() => {
    gameState();
  }, []);

  return gameLoadingError
    ?  <Navigate to="/login" />
    : (
      <div className={styles.container}>
        <Table handleClick={handleClick} cells={game.cells}/>
        <p>Turn: {game.currentTurn}</p>
        {!game.currentTurn && (
          <>
            <button onClick={handleRestart}>Play Again</button>
          </>
        )}
        {game.winner && (
          <>
            <p>{game.winner} is the winner!</p>
            <button onClick={handleRestart}>Play Again</button>
          </>
        )}
        {game.draw && (
          <>
            <p>Draw </p>
            <button onClick={handleRestart}>Play Again</button>
          </>
        )}
      </div>
    );
};

export default TicTacToe;
