import React from 'react';

function Resume() {
  return (
    <section>
      <div className="resume">
        <h1>Skills</h1>
      </div>
      <div className="skills">
        <ul className="skills-list">
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>React</li>
          <li>Git</li>
        </ul>
      </div>
      <div className="resume-pdf">
        <button className="resume-button materials-icon">
          <a href="./JVResume.pdf" download>
            Resume
          </a>
        </button>
      </div>
    </section>
  );
}

export default Resume;