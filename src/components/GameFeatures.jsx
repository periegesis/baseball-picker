import React, { Component } from 'react';
import { GameFlags } from '../common/properties';

export default class GameFeatures extends Component {
    render() {
        return ( 
            <div className="section-panel">
                <div className="answer-panel">
                    <h3>What do you like to see happen in baseball games?</h3>
                    <div className="game-attribute-question">
                        <label for="blowout">
                            <input 
                                id="blowout"
                                type="checkbox"
                                checked={this.props.gameProps & GameFlags.blowout}
                                onChange={(e) => this.props.setPropState(e.target.checked ? this.props.gameProps | GameFlags.blowout : this.props.gameProps & ~GameFlags.blowout)} />
                            A big blowout win for my team
                        </label>
                    </div>
                    <div className="game-attribute-question">
                        <label for="high-scoring">
                            <input 
                                id="high-scoring"
                                type="checkbox"
                                checked={this.props.gameProps & GameFlags.highScoring}
                                onChange={(e) => this.props.setPropState(e.target.checked ? this.props.gameProps | GameFlags.highScoring : this.props.gameProps & ~GameFlags.highScoring)} />
                            A game where both teams score a lot of runs
                        </label>
                    </div>
                    <div className="game-attribute-question">
                        <label for="comeback">
                            <input 
                                id="comeback"
                                type="checkbox"
                                checked={this.props.gameProps & GameFlags.comeback}
                                onChange={(e) => this.props.setPropState(e.target.checked ? this.props.gameProps | GameFlags.comeback : this.props.gameProps & ~GameFlags.comeback)} />
                            One team coming from behind to win
                        </label>
                    </div>
                    <div className="game-attribute-question" onClick={(e) => this.setState({ pitching: true })}>
                        <label for="pitching">
                            <input 
                                id="pitching"
                                type="checkbox"
                                checked={this.props.gameProps & GameFlags.pitching}
                                onChange={(e) => this.props.setPropState(e.target.checked ? this.props.gameProps | GameFlags.pitching : this.props.gameProps & ~GameFlags.pitching)} />
                            A close pitcher's duel
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}