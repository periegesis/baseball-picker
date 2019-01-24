import React, { Component } from 'react';
import { DealbreakerFlags } from '../common/properties';

export default class Dealbreakers extends Component {
    render() {
        return (
            <div className="section-panel">
                <fieldset>
                    <div className="game-attribute-question">
                        <label htmlFor="any-losses">
                            <input 
                                id="any-losses"
                                type="radio"
                                checked={this.props.gameProps & DealbreakerFlags.anyLosses}
                                onChange={(e) => this.props.setPropState(this.props.gameProps 
                                        & ~DealbreakerFlags.fewLosses 
                                        & ~DealbreakerFlags.noLosses
                                        | DealbreakerFlags.anyLosses)} />
                            Yes
                        </label>
                    </div>
                    <div className="game-attribute-question">
                        <label htmlFor="no-losses">
                            <input 
                                id="no-losses"
                                type="radio" 
                                checked={this.props.gameProps & DealbreakerFlags.noLosses} 
                                onChange={(e) => this.props.setPropState(this.props.gameProps
                                        & ~DealbreakerFlags.anyLosses
                                        & ~DealbreakerFlags.fewLosses
                                        | DealbreakerFlags.noLosses)} />
                            No
                        </label>
                    </div>
                    <div className="game-attribute-question">
                        <label htmlFor="few-losses">
                            <input 
                                id="few-losses"
                                type="radio"
                                checked={this.props.gameProps & DealbreakerFlags.fewLosses}
                                onChange={(e) => this.props.setPropState(this.props.gameProps
                                        & ~DealbreakerFlags.anyLosses
                                        & ~DealbreakerFlags.noLosses
                                        | DealbreakerFlags.fewLosses)}/>
                            Only sometimes
                        </label>
                    </div>
                </fieldset>
            </div>
        );
    }
}