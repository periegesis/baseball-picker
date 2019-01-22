import React, { Component } from 'react';
import { GameFlags } from '../common/properties';

export default class GameFeatures extends Component {
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
                                checked={this.props.gameProps & GameFlags.blowout}
                                onChange={(e) => this.props.setPropState(e.target.checked ? this.props.gameProps | GameFlags.blowout : this.props.gameProps & ~GameFlags.blowout)} />
                        </label>
                    </div>
                    <div className="game-attribute-question">
                        <label>
                            A game where both teams score a lot of runs
                            <input 
                                type="checkbox"
                                checked={this.props.gameProps & GameFlags.highScoring}
                                onChange={(e) => this.props.setPropState(e.target.checked ? this.props.gameProps | GameFlags.highScoring : this.props.gameProps & ~GameFlags.highScoring)} />
                        </label>
                    </div>
                    <div className="game-attribute-question">
                        <label>
                            One team coming from behind to win
                            <input 
                                type="checkbox"
                                checked={this.props.gameProps & GameFlags.comeback}
                                onChange={(e) => this.props.setPropState(e.target.checked ? this.props.gameProps | GameFlags.comeback : this.props.gameProps & ~GameFlags.comeback)} />
                        </label>
                    </div>
                    <div className="game-attribute-question" onClick={(e) => this.setState({ pitching: true })}>
                        <label>
                            A close pitcher's duel
                            <input 
                                type="checkbox"
                                checked={this.props.gameProps & GameFlags.pitching}
                                onChange={(e) => this.props.setPropState(e.target.checked ? this.props.gameProps | GameFlags.pitching : this.props.gameProps & ~GameFlags.pitching)} />
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}