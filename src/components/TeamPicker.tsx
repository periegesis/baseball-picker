import * as React from 'react';
import { TeamNames } from '../common/teamNames';
import "./Pickers.css";

export interface Props {
    setFavoriteTeam?: (selectedTeam: string) => void;
}

interface State {
    selectedTeam: string,
    setFavoriteTeam?: (selectedTeam: string) => void
}

export class TeamPicker extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
        this.state = {
            selectedTeam: 'NONE'
        };
    }

    public render() {
        let cur_teams = Object.keys(TeamNames).map(team => new TeamOption(team, TeamNames[team]));
        cur_teams.unshift(new TeamOption("NONE", "No preference"));
        return (
            <div className="section-panel">
                <h3>What is your favorite team?</h3>
                <div className="dropdown">
                    <select value={this.state.selectedTeam} 
                            onChange={(e) => this.setState({selectedTeam: e.target.value})}
                            onBlur ={() => this.props.setFavoriteTeam != null && this.props.setFavoriteTeam(this.state.selectedTeam)}>
                        { cur_teams.map(team => <option key={team.value} value={team.value}>{team.display}</option>)}
                    </select>
                </div>
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