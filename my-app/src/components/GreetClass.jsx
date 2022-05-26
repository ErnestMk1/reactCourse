import { Component } from "react";

class Greetings extends Component {
  render() {
    return (
      <div>
        <h1>Hello blin</h1>

        {this.props.someProps}
      </div>
    )
  };
};

export default Greetings;
