import React from 'react';
import Main from './Main';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import './Container.css';

const Sidebar = ({ expandContent }) => {
  let style = null;
  
  // Unset the max-width when we are ready to expand
  // the content with an inline style. Otherwise,
  // the inline style is removed and the max-width
  // still applies. Thus, scrolling down and
  // scrolling back up works fine.
  if(expandContent) {
    console.log('unsetting max width');
    style = { maxWidth: 'unset' };
  }
  
  return (
    <div className="sb-container" style={style}>
      <div className="content">
        <div className="sidebar">
          <div className="sidebar-main">
            <div className="navbox">
              <div className="namecard">
                <div className="salutation">Hello! My name is,</div>
                <div className="name">Gautham</div>
              </div>
              <nav>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#about">About</a>
              </nav>
            </div>
            <div className="intro">
              <p>
                I have worked in software for over 5 years and with software since I was a kid.
                I am inspired by finding simple and elegant approaches to complex problems.
                As a full-stack engineer with a solid analytical background,
                I am available to help you not only solve but also understand your technical challenges.
                  </p>
            </div>
          </div>
          <div className="skillbar">
            <ul>
              <li>Javascript</li>
              <li>AWS</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>
      </div>
      <Main expanded={expandContent}>
        <Skills />
        <Experience />
      </Main>
    </div>
  );
}

export default Sidebar;