import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import GameFeatures from './components/GameFeatures'
import './App.css';
import FavoriteTeam from './components/FavoriteTeam';
import Dealbreakers from './components/Dealbreakers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Baseball Game Randomizer</h1>
        <h2>Watch your favorite team play as much as you like</h2>
        <Jumbotron>
          <div style={{display: "flex" }}>
          <FavoriteTeam />
          <GameFeatures />
          <Dealbreakers />
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
