import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <div className="m-5">
          <h1 className="text-4xl ">Count: {this.state.count}</h1>
          <button onClick={this.handleIncrease}>Click</button>
        </div>
      </>
    );
  }
}
