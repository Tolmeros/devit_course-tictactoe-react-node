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
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
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
