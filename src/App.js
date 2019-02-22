import React, { Component } from 'react';

import HeaderImg from "./header.png";
import PersonalImg from "./person.png";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="banner">
          <ul id="banner-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Other</a></li>
          </ul>
        </div>
        <header className="App-header">
          <img src={HeaderImg} className="header-back" alt="logo" />
          <img src={PersonalImg} className="personal-img" />
        </header>
      </div>
    );
  }
}

export default App;
