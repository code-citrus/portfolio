import React, { Component } from 'react';
import Hero from './Hero';
import Sidebar from './Sidebar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // x-offset of the hero image will increase
      // as user scrolls down, until it is outside
      // bounds
      heroOffset: 0,
    };
    window.addEventListener('scroll', (e) => {
      console.log('scroll: ' + JSON.stringify(e));
    });
  }

  render() {
    return(
      <div>
        <Sidebar />
        <Hero dx={this.state.heroOffset}/>
      </div>
    )
  }
}

export default App;