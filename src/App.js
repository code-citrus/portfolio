import React, { Component } from 'react';
import Hero from './Hero';
import Container from './Container';
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
      this.setState({
        heroOffset: window.scrollY,
      });
    });
  }

  render() {
    return(
      <div>
        <Container />
        <Hero dx={this.state.heroOffset}/>
      </div>
    )
  }
}

export default App;