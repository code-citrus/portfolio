import React from 'react';
import GridGallery from '../widgets/GridGallery';
import './sections.css';
import './Skills.css';

const gridItemStyles = {
  display: 'flex',
  justifyContent: 'center',
};

const Skills = ({}) => {
  return (
    <section>
      <h2>Skills</h2>
      <GridGallery gridItemStyles={gridItemStyles} disableExpansion>
        <div class="skill">HTML/CSS</div>
        <div class="skill">Javascript</div>
        <div class="skill">React</div>
        <div class="skill">AWS</div>
        <div class="skill">React Native</div>
        <div class="skill">Native Android</div>
        <div class="skill">Responsive Design</div>
        <div class="skill">Bootstrap 4</div>
        <div class="skill">Node/Express</div>
        <div class="skill">SQL</div>
      </GridGallery>
    </section>
  )
};

export default Skills;