import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';

function Home({gameLoadingError, gameState}) {
  // состояние игры получить
  // проверить

  useEffect(() => {
    gameState();
  }, []);

  /*
  return (
    <div className="Home">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>
    </div>
  );
  */
  return gameLoadingError
    ? <Navigate to="/login" />
    : <Navigate to="/game" />
}

export default Home;
