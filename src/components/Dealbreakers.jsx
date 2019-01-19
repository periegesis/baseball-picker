import React, { Component } from 'react';

const TeamLosingPrefs = {
    NoLosses: 0,
    FewLosses: 1,
    NoPref: 2,
}

export default class Dealbreakers extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            teamLosing: TeamLosingPrefs.FewLosses
        };
    }

    render() {
        return (
            <div class="section-panel">
                <h3>Will you still enjoy a game where your favorite team loses?</h3>
                <fieldset>
                    <label>
                        Yes
                        <input 
                            type="radio"
                            checked={this.state.teamLosing === TeamLosingPrefs.NoPref}
                            onChange={(e) => this.setState({ teamLosing: TeamLosingPrefs.NoPref })} />
                    </label>
                    <label>
                        No
                        <input 
                            type="radio" 
                            checked={!this.state.teamLosing} 
                            onChange={(e) => this.setState({ teamLosing: TeamLosingPrefs.NoLosses })} />
                    </label>
                    <label>
                        Only sometimes
                        <input 
                            type="radio"
                            checked={this.state.teamLosing === TeamLosingPrefs.FewLosses}
                            onChange={(e) => this.setState({ teamLosing: TeamLosingPrefs.FewLosses })}/>
                    </label>
                </fieldset>
            </div>
        );
    }
}