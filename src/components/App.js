/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    /* eslint-disable-next-line react/no-access-state-in-setstate */
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    const { next, total } = this.state;
    const result = total || next || '0';

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">React Calculator</h1>
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
