import React, { Component } from 'react';
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super (props);

    this.state = {
      name: 'Ernest',
    };
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Ernest',
      })
    }, 2000);
  };

  render() {
    console.log('********Parent Component Render********');
    return (
      <div>
        Parent Component
        {/* <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  };
};

export default ParentComp;
