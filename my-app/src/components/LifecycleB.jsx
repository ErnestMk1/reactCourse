import { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Ernest',
    };

    console.log('LifecycleB constructor');
  };

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  };

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  };

  getSnapshotBeforeUpdate() {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  };

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
  };

  render() {
    console.log('lifecycleB render');
    return (
      <div>
        Lifecycle B
      </div>
    );
  };

  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  };
};

export default LifecycleB;
