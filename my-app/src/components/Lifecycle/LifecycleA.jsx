import { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Ernest',
    };

    console.log('LifecycleA constructor');
  };

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  };

  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  };

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  };

  getSnapshotBeforeUpdate() {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  };

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  };

  changeState = () => {
    this.setState({
      name: 'NotErnestAnymore',
    });
  };

  render() {
    console.log('lifecycleA render');
    return (
      <div>
        Lifecycle A

        <button onClick={this.changeState}>Change State</button>

        <LifecycleB />
      </div>
    );
  };
};

export default LifecycleA;
