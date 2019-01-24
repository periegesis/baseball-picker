import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'
import Column from 'react-bootstrap/lib/Col'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import GameFeatures from './components/GameFeatures'
import './App.scss';
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
      games: []
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
      .then(items => this.setState({ games: items }))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <Container className="header-container">
          <Row>
            <Column>
              <h1>Baseball Game Randomizer</h1>
              <h2>Watch your favorite team play as much as you like</h2>
            </Column>
          </Row>
        </Container>
        <Jumbotron fluid>
          <Container className="jumbotron-container">
            <Row>
              <Column xs={12} xl={4}>
                <h3>What is your favorite team?</h3>
              </Column>
              <Column xs={12} xl={4}>
                <h3>What do you want to see today?</h3>
              </Column>
              <Column xs={12} xl={4}>
                <h3>What do you <i>not</i> want to see?</h3>
              </Column>
            </Row>
            <Row>
              <Column xs={12} xl={4}>
                <FavoriteTeam
                  favoriteTeam={this.state.favoriteTeam}
                  setFavoriteTeam={this.setFavoriteTeam} />
              </Column>
              <Column xs={12} xl={4}>
                <GameFeatures
                  gameProps={this.state.props}
                  setPropState={this.setPropState} />
              </Column>
              <Column xs={12} xl={4}>
                <Dealbreakers
                  gameProps={this.state.props}
                  setPropState={this.setPropState} />
              </Column>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Button onClick={this.fetchGame}>Find Game</Button>
          {this.state.games.length > 0 && this.state.games.map((game) => { return(
            <Row key={game}>
              <Column><h3>{game}</h3></Column>
            </Row>)
          })}
        </Container>
      </div>
    );
  }
}

export default App;
