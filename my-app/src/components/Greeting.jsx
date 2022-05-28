import { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    };
  };

  render() {
    let message = null;

    if (this.state.isLoggedIn) {
      message = <p>Hello, Ernest!</p>
    } else {
      message = <p>Welcome, guest!</p>
    }

    return (
      <div>
        {message}
      </div>
    );
  };
};

export default Greeting;
