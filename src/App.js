import React, { Component } from 'react';
import YouTube from 'react-youtube';
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
    this.fetchGame = this.fetchGame.bind(this);
    this.state = {
      favoriteTeam: "NONE",
      props: 0,
      video: {}
    }
  }

  setFavoriteTeam(team) {
    this.setState({ favoriteTeam: team });
  }

  setPropState(props) {
    this.setState({ props });
  }

  fetchGame() {
    fetch('https://bytcim69qk.execute-api.us-east-1.amazonaws.com/beta?team=' + this.state.favoriteTeam + '&props=' + this.state.props, {
      method: 'GET',
      mode: 'cors',
    })
      .then(result => result.json())
      .then(items => this.setState({ video: items }))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className="App">
        <h1>Baseball Game Randomizer</h1>
        <h2>Watch your favorite team play as much as you like</h2>
        <Jumbotron>
          <div className="panel">
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
        <button onClick={this.fetchGame}>Find Game</button>
        {this.state.video.snippet && <YouTube videoId={this.state.video.id.videoId} />}
      </div>
    );
  }
}

export default App;
