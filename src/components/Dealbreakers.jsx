import React, { Component } from 'react';
import { DealbreakerFlags } from '../common/properties';

export default class Dealbreakers extends Component {
    render() {
        return (
            <div className="section-panel">
                <h3>Will you still enjoy a game where your favorite team loses?</h3>
                <fieldset>
                    <label>
                        Yes
                        <input 
                            type="radio"
                            checked={this.props.gameProps & DealbreakerFlags.anyLosses}
                            onChange={(e) => this.props.setPropState(this.props.gameProps 
                                    & ~DealbreakerFlags.fewLosses 
                                    & ~DealbreakerFlags.noLosses
                                    | DealbreakerFlags.anyLosses)} />
                    </label>
                    <label>
                        No
                        <input 
                            type="radio" 
                            checked={this.props.gameProps & DealbreakerFlags.noLosses} 
                            onChange={(e) => this.props.setPropState(this.props.gameProps
                                    & ~DealbreakerFlags.anyLosses
                                    & ~DealbreakerFlags.fewLosses
                                    | DealbreakerFlags.noLosses)} />
                    </label>
                    <label>
                        Only sometimes
                        <input 
                            type="radio"
                            checked={this.props.gameProps & DealbreakerFlags.fewLosses}
                            onChange={(e) => this.props.setPropState(this.props.gameProps
                                    & ~DealbreakerFlags.anyLosses
                                    & ~DealbreakerFlags.noLosses
                                    | DealbreakerFlags.fewLosses)}/>
                    </label>
                </fieldset>
            </div>
        );
    }
}