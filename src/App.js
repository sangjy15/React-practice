import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  state = {
    counter: 0
  };
  constructor(props) {
    super(props);
  }
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  reset = () => {
    this.setState({
      counter: 0
    });
  };
  render() {
    return (
      <div>
        <Counter value={this.state.counter} />
        <button onClick={this.increaseCounter}>+</button>
        <button onClick={this.decreaseCounter}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}



export default App;
