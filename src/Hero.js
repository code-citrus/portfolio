import React from 'react';
import './Hero.css';

const Hero = ({ dx = 0 }) => {
  const style = {
    left: `calc(100vw - 100vh + ${dx}px)`
  };

  return (
    <div className="hero-border" style={style}>
      <div className="hero"></div>
    </div>
  );
};

export default Hero;