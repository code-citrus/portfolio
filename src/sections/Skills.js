import React from 'react';
import GridGallery from '../widgets/GridGallery';
import './sections.css';

const Skills = ({}) => {

  const toggleActive = (e) => {
    console.log('clicked');
    e.target.classList.toggle('active');
  }

  return (
    <section>
      <h2>Skills</h2>
      <GridGallery>
        <div onClick={toggleActive}>HTML/CSS</div>
        <div onClick={toggleActive}>Javascript</div>
        <div onClick={toggleActive}>React</div>
        <div onClick={toggleActive}>AWS</div>
        <div onClick={toggleActive}>React Native</div>
        <div onClick={toggleActive}>Native Android</div>
      </GridGallery>
    </section>
  )
};

export default Skills;