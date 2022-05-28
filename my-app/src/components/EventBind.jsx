import { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };

    this.messageChanger = this.messageChanger.bind(this);
  };

  messageChanger() {
    this.setState({
      message: 'World',
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.messageChanger}>Click</button>
      </div>
    );
  };
};

export default EventBind;
