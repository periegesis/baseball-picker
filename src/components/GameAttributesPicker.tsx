import * as React from 'react';
import { TeamNames } from '../common/teamNames';
import { UserGamePrefsData } from 'src/data/reducers/userGamePrefsReducer';
import "./Pickers.css";

export interface Props {
    setGamePreferences?: (prefs: UserGamePrefsData) => void;
}

export class GameAttributesPicker extends React.Component<Props, UserGamePrefsData> {
    constructor(props: Props) {
        super(props);
        this.state = {
            blowouts: false,
            highScoring: false,
            comebacksIn9: false,
            pitching: false,
            favoriteTeamLosing: false
        };
    }

    public render() {
        let cur_teams = Object.keys(TeamNames).map(team => new TeamOption(team, TeamNames[team]));
        cur_teams.unshift(new TeamOption("NONE", "No preference"));
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
                <div>
                    <h3>Will you still enjoy a game where your favorite team loses?</h3>
                    <fieldset>
                        <label>
                            Yes
                            <input 
                                type="radio"
                                checked={this.state.favoriteTeamLosing}
                                onChange={(e) => this.setState({ favoriteTeamLosing: true })} />
                        </label>
                        <label>
                            No
                            <input type="radio" checked={!this.state.favoriteTeamLosing} onChange={(e) => this.setState({ favoriteTeamLosing: false })} />
                        </label>
                    </fieldset>
                </div>
                <button onClick={() => this.props.setGamePreferences != null && this.props.setGamePreferences(this.state)}>Next</button>
            </div>
        );
    }
}

export class TeamOption {
    public value: string;
    public display: string;

    constructor(value: string, display: string) {
        this.value = value;
        this.display = display;
    }
}