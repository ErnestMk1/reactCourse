import React, { Component } from 'react';

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: '',
    };
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count}`;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Updating document tile');
      document.title = `Clicked ${this.state.count}`;
    };
  };

  buttonHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => {
            this.setState({name: e.target.value});
          }}
        />
        <button onClick={this.buttonHandler}>Clicked {this.state.count}</button>
      </div>
    );
  };
};

export default ClassCounterOne;
