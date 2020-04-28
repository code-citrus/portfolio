import React from 'react';
import './Container.css';

const Sidebar = () => {
  return (
    <div className="sb-container">
      <div className="content">
        <div className="sidebar">
          <div className="sidebar-main">
            <div className="navbox">
              <div className="namecard">
                <div className="salutation">Hello! My name is,</div>
                <div className="name">Gautham</div>
              </div>
              <nav>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Experience</a>
                <a href="#">Portfolio</a>
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
    </div>
  );
}

export default Sidebar;