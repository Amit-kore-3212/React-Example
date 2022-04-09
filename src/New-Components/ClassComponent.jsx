import React from "react";

export class ClassComponent extends React.Component {
  constructor() {
    super(); // parent component
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button>Reset</button>
      </div>
    );
  }
}
