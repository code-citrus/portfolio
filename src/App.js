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

      // Only expand the main content once we've
      // scrolled enough
      expanded: false,

    };
    window.addEventListener('scroll', (e) => {
      const expandContent = window.scrollY > 0.7*window.innerHeight;
      console.log('expanded: ' + expandContent);
      this.setState({
        heroOffset: window.scrollY,
        expandContent,
      });
    });
  }

  render() {
    return(
      <div>
        <Container expandContent={this.state.expandContent} />
        <Hero dx={this.state.heroOffset} />
      </div>
    )
  }
}

export default App;