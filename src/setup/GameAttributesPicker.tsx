import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

export class GameAttributesPicker extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

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