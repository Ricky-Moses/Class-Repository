import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <h1>Class Component: {this.state.count}</h1>
        <button onClick={this.increment}>Click</button>
      </>
    );
  }
}

export default ClassComponent;
