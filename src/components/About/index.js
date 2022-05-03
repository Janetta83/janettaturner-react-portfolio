import React from 'react';

function About() {
  return (
    <div className="about">
      <h1 className="about">About Me</h1>
      <div className="">
        <img
          className="profile-pic"
          src={require('../../assets/images/Profile_pic.png')}
          alt="Janetta"
        />
      </div>
      <div className="about-paragraph">
        <p>
            Full Stack Web Developer with management skills, IT support, and extensive customer service skills. 
            I can be very diverse such as working alone or with a group. I thoroughly 
            enjoy learning new things and enhancing my current knowledge skillset. 
            I consider myself to be adaptable, self-motivated, resourceful, and driven. 
        </p>
        </div>
      
      </div>
    );
  }
  
  export default About;