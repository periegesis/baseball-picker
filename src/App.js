import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Button from "react-bootstrap/lib/Button";
import Column from "react-bootstrap/lib/Col";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import GameFeatures from "./components/GameFeatures";
import "./App.scss";
import FavoriteTeam from "./components/FavoriteTeam";
import Dealbreakers from "./components/Dealbreakers";
import CardDeck from "react-bootstrap/lib/CardDeck";
import Card from "react-bootstrap/lib/Card";
import TeamNames from "./common/teamNames";

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
    };
  }

  setFavoriteTeam(team) {
    this.setState({ favoriteTeam: team });
  }

  setPropState(props) {
    this.setState({ props });
  }

  fetchGame() {
    fetch(
      "https://bytcim69qk.execute-api.us-east-1.amazonaws.com/beta?team=" +
        this.state.favoriteTeam +
        "&props=" +
        this.state.props,
      {
        method: "GET",
        mode: "cors"
      }
    )
      .then(result => result.json())
      .then(items => this.setState({ games: items }))
      .catch(e => console.log(e));
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
            <Row className="hidden-xs-down">
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
                <h3 className="hidden-xs-up">What is your favorite team?</h3>
                <FavoriteTeam
                  favoriteTeam={this.state.favoriteTeam}
                  setFavoriteTeam={this.setFavoriteTeam}
                />
              </Column>
              <Column xs={12} xl={4}>
                <h3 className="hidden-xs-up">What do you want to see today?</h3>
                <GameFeatures
                  gameProps={this.state.props}
                  setPropState={this.setPropState}
                />
              </Column>
              <Column xs={12} xl={4}>
                <h3 className="hidden-xs-up">What do you <i>not</i> want to see?</h3>
                <Dealbreakers
                  gameProps={this.state.props}
                  setPropState={this.setPropState}
                />
              </Column>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Button onClick={this.fetchGame}>Find Game</Button>
          <CardDeck>
            {this.state.games.length > 0 &&
              this.state.games.map(game => {
                return (
                  <Card key={game.videoId}>
                    <a href={`https://www.youtube.com/watch?v=${game.videoId}`}
                      target="_blank"
                      style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }} />
                    <Card.Img variant="top" src={`https://i.ytimg.com/vi/${game.videoId}/mqdefault.jpg`} />
                    <Card.Body>
                      <Card.Title>{TeamNames[game.awayTeam]} at {TeamNames[game.homeTeam]}</Card.Title>
                      <Card.Text>{game.date}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default App;
