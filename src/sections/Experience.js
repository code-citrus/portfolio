import React from 'react';
import GridGallery from '../widgets/GridGallery';
import './Experience.css';

const EXPERIENCE = [
  {
    company: "Amazon",
    position: "SDE II",
    summary: "",
    start: "Jan 2018",
    end: "Oct 2019",
    summary : "Amazon A to Z Mobile App: a brand new react-native app for Amazon Employees to interact with their work life. The #1 trending business app on Play store on release in 2018. Supported 100K+ active users every day.",
    tasks: [
      "Integrated react-native build system with internal CI/CD pipeline",
      "Version management for Android based on AppSync and GraphQL",
      "Designed and built user analytics reporting system with Amazon Pinpoint",
      "Implemented native push notification support on Android & iOS",
      "DevOps & customer service experience for high-traffic rails website"
    ],
    tech: ["React Native", "Java", "Objective-C", "Redux", "AWS Appsync", "AWS API Gateway", "AWS Lambda", "AWS CloudWatch", "AWS Pinpoint",  "AWS Amplify", "AWS CloudFormation", "Ruby on Rails", "Firebase"]
  },
  {
    company: "Charter",
    position: "Software Engineer",
    start: "Apr 2017",
    end: "Oct 2017",
    summary: "Worked on a small team on new initiative to build out a web application for A/B Testing built with React and MeteorJS. Very fast apced (design to production in 6 months)",
    tech: ["React", "MeteorJS", "AWS Lambda", "Apollo/GraphQL", "DevOps", "Docker", "Webpack"]
  },
  {
    company: "Northrop Grumman Corporation",
    position: "Software Engineer",
    start: "Dec 2014",
    end: "Jan 2017",
    summary: "I worked on a variety of different projects for small to mid-size teams.",
    tasks: [
      "Python module analyzer and Java code analysis tools",
      "C++/QT UI Development for GIS Application",
      "Realtime GIS visualizations with NASA worldwind"
    ],
    tech: ["Java", "C++", "QT", "3D Graphics / Vector Math"],
  },
  {
    company: "Time Warner Cable",
    position: "Software Engineer",
    start: "Jul 2013",
    end: "Nov 2014",
    summary: "Development of a generic integration testing framework in Java",
    tech: ["Java", "Unit Testing", "ReST"]
  }
];

const Experience = ({}) => {
  const createEntry = (item, index) => {
    const header = `${item.company} - ${item.position}`;
    return (
      <div className="exp-card">
        <div className="exp-header">{`${item.start} - ${item.end}`}</div>
        <div className="exp-subheader">{item.company}</div>
        <div className="exp-subheader">{item.position}</div>
        <div className="expanded-only">
          <p>{item.summary}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="experience">
      <h2>Experience</h2>
      <GridGallery gridItemStyles={{ flexBasis: "calc(50% - 28px)" }}>
        { EXPERIENCE.map(createEntry) }
      </GridGallery>
    </section>
  );
};

export default Experience;