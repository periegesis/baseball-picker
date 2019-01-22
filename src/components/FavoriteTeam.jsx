import React, { Component } from 'react';
import TeamNames from '../common/teamNames'

export default class FavoriteTeam extends Component {
    render() {
        let cur_teams = Object.keys(TeamNames).map(team => new TeamOption(team, TeamNames[team]));
        cur_teams.unshift(new TeamOption("NONE", "No preference"));
        return (
            <div className="section-panel">
                <h3>What is your favorite team?</h3>
                <div className="dropdown">
                    <select value={this.props.favoriteTeam} 
                            onChange={(e) => this.props.setFavoriteTeam != null && this.props.setFavoriteTeam(e.target.value)}>
                        { cur_teams.map(team => <option key={team.value} value={team.value}>{team.display}</option>)}
                    </select>
                </div>
            </div>
        );
    }
}

export class TeamOption {
    value;
    display;

    constructor(value, display) {
        this.value = value;
        this.display = display;
    }
}