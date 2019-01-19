import React, { Component } from 'react';

export default class GameFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blowouts: false,
            highScoring: false,
            comebacksIn9: false,
            pitching: false,
            favoriteTeamLosing: false
        };
    }

    render() {
        return ( 
            <div className="section-panel">
                <div className="answer-panel">
                    <h3>What do you like to see happen in baseball games?</h3>
                    <div className="game-attribute-question">
                        <label>
                            A big blowout win for my team
                            <input 
                                type="checkbox"
                                checked={this.state.blowouts}
                                onChange={(e) => this.setState({ blowouts: e.target.checked })} />
                        </label>
                    </div>
                    <div className="game-attribute-question">
                        <label>
                            A game where both teams score a lot of runs
                            <input 
                                type="checkbox"
                                checked={this.state.highScoring}
                                onChange={(e) => this.setState({ highScoring: e.target.checked })} />
                        </label>
                    </div>
                    <div className="game-attribute-question">
                        <label>
                            One team coming from behind to win
                            <input 
                                type="checkbox"
                                checked={this.state.comebacksIn9}
                                onChange={(e) => this.setState({ comebacksIn9: e.target.checked })} />
                        </label>
                    </div>
                    <div className="game-attribute-question" onClick={(e) => this.setState({ pitching: true })}>
                        <label>
                            A close pitcher's duel
                            <input 
                                type="checkbox"
                                checked={this.state.pitching}
                                onChange={(e) => this.setState({ pitching: e.target.checked })} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}