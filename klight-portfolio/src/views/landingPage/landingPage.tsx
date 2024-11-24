import React from 'react';
import '../../styles/landingPage.css';
import profilePic from '../../assets/me.png'; // Profile picture

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="intro">
        <img src={profilePic} alt="Me" className="profile-pic" />
        <div className="divider"></div> {/* Vertical line */}
        <div className="intro-text">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Full Stack Software Engineer | IT Professional
          </p>
          <button className="cta-button" onClick={() => alert("Let's work together!")}>
            Get in Touch
          </button>
        </div>
      </div>
      <div className="detailed-intro">
        <p>
          Welcome to my portfolio! I'm Kenny Light, a senior software engineer with a passion for crafting innovative solutions that drive business success. 
          With a robust background in full-stack development, I specialize in creating scalable, efficient, and user-centric applications. 
          My expertise spans various technologies, enabling me to adapt and thrive in dynamic environments.
        </p>
        <p>
          Explore my work to see how I blend technical proficiency with creative problem-solving to deliver exceptional results.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
