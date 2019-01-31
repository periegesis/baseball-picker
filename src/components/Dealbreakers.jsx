import React, { Component } from "react";
import { DealbreakerFlags } from "../common/properties";

export default class Dealbreakers extends Component {
  constructor(props) {
    super(props);

    props.setPropState(valToProps("2", props.gameProps))
  }

  render() {
    return (
      <div className="section-panel">
        <fieldset>
          <div className="game-attribute-question">
            {(this.props.gameProps & DealbreakerFlags.noLosses) > 0 && <label htmlFor="losses">I don't want to see my team lose</label>}
            {(this.props.gameProps & DealbreakerFlags.fewLosses) > 0 && <label htmlFor="losses">I only want to see my team lose infrequently</label>}
            {(this.props.gameProps & DealbreakerFlags.anyLosses) > 0 && <label htmlFor="losses">Don't take winning or losing into account</label>}
            <input
              type="range"
              className="custom-range"
              min="1"
              max="3"
              onChange={(e) => this.props.setPropState(valToProps(e.target.value, this.props.gameProps))}
              value={propsToVal(this.props.gameProps)}
              id="losses">
            </input>
          </div>
        </fieldset>
      </div>
    );
  }
}

function valToProps(value, props) {
  props = clearPropState(props);
  switch (value) {
    case "1":
      return props | DealbreakerFlags.noLosses;
    case "2":
      return props | DealbreakerFlags.fewLosses;
    case "3":
      return props | DealbreakerFlags.anyLosses;
    default:
      return props | DealbreakerFlags.noLosses;
  }
}

function propsToVal(props) {
  if (props & DealbreakerFlags.noLosses) {
    return 1;
  }
  else if (props & DealbreakerFlags.fewLosses) {
    return 2;
  }
  else if (props & DealbreakerFlags.anyLosses) {
    return 3;
  }

  return 1;   // default
}

function clearPropState(props) {
  return props
    & ~DealbreakerFlags.fewLosses
    & ~DealbreakerFlags.noLosses
    & ~DealbreakerFlags.anyLosses;
}
