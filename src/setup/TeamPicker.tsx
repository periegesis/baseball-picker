import * as React from 'react';
import { TeamNames } from '../common/teamNames';

export class TeamPicker extends React.Component {
    state = {
        selectedTeam: 'NONE'
    };

    public render() {
        let cur_teams = Object.keys(TeamNames).map(team => new TeamOption(team, TeamNames[team]));
        cur_teams.unshift(new TeamOption("NONE", "No preference"));
        return (
            <div className="team-picker">
                <div className="question-text">
                    What is your favorite team?
                </div>
                <div className="dropdown">
                    <select value={this.state.selectedTeam} onChange={(e) => this.setState({selectedTeam: e.target.value})}>
                        { cur_teams.map(team => <option key={team.value} value={team.value}>{team.display}</option>)}
                    </select>
                </div>
                <button onClick={() => console.log(this.state)}>Next</button>
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