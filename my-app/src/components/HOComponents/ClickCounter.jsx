import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const {incrementCounter, count} = this.props;

    return (
      <div>
        <button onClick={incrementCounter}>Clicked {count} Times</button>

        <h3>My name's {this.props.name}</h3>
      </div>
    );
  };
};

export default withCounter(ClickCounter);
