import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import GameFeatures from './components/GameFeatures'
import './App.css';
import FavoriteTeam from './components/FavoriteTeam';
import Dealbreakers from './components/Dealbreakers';

class App extends Component {
  constructor(props) {
    super(props);

    this.setFavoriteTeam = this.setFavoriteTeam.bind(this);
    this.setPropState = this.setPropState.bind(this);
    this.state = {
      favoriteTeam: "NONE",
      props: 0,
    }
  }

  setFavoriteTeam(team) {
    this.setState({ favoriteTeam: team });
  }

  setPropState(props) {
    this.setState({ props });
  }

  render() {
    return (
      <div className="App">
        <h1>Baseball Game Randomizer</h1>
        <h2>Watch your favorite team play as much as you like</h2>
        <Jumbotron>
          <div style={{display: "flex" }}>
          <FavoriteTeam
            favoriteTeam={this.state.favoriteTeam}
            setFavoriteTeam={this.setFavoriteTeam} />
          <GameFeatures
            gameProps={this.state.props}
            setPropState={this.setPropState} />
          <Dealbreakers
            gameProps={this.state.props}
            setPropState={this.setPropState} />
          </div>
        </Jumbotron>
        <button>Find Game</button>
      </div>
    );
  }
}

export default App;
