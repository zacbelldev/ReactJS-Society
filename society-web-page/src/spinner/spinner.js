import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <img src={logo} className="App-logo" alt="logo" />
        { this.props.children }
      </div>
    )
  }
}

export default Spinner;
