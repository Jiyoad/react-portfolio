import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from "./components/main"
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Nav />
        <Main />
      </div>

    );
  }
}

export default App;

