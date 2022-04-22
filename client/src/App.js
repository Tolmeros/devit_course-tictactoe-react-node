import React from 'react';
import {
  BrowserRouter as Router,
  //HashRouter as Router,
  Routes,
  Route,
  //Link
  NavLink as Link,
} from "react-router-dom";

import './App.css';
import TicTacToe from './components/TicTacToe';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  // состояние игры получить
  // проверить

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
}



function Game() {
  return (
    <div className="Game">
      <TicTacToe />
    </div>
  );
}

export default App;
