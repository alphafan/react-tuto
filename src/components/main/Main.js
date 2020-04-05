import React, { Component } from 'react';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World'
    };
  }

  render() {
    const data = this.props.data;
    return (
      <div>
        {data[0].title}
        {this.state.message}
      </div>
    )
  }
}

export default Main;
