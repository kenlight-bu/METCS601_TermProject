import React from 'react';
import '../../styles/aboutPage.css';
import profilePic from '../../assets/me.png'; // Ensure this path points to your image

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="profile-picture">
        <img src={profilePic} alt="Kenny Light" />
      </div>

      <section className="hero-section">
        <h1>Hi there, I’m Kenny</h1>
        <h2>Father, Husband, and Lifelong Learner</h2>
        <p>
          I’m a proud father and husband to five beautiful children. I’m passionate about coffee, traveling to new places, 
          playing golf, and creating joy through music and laughter. When I’m not working on my home or spending time with family, 
          you’ll find me immersed in my favorite craft—writing code.
        </p>
      </section>

      <section className="details-section">
        <h2>My Philosophy</h2>
        <p>
          I believe that creating meaningful work begins with understanding the people and problems at hand. Whether it's writing code, 
          solving problems, or working with a team, I value collaboration and creativity to drive impactful results.
        </p>
        <p>
          Outside of work, I enjoy spending quality time with my family, exploring new places, and taking on projects that improve my home. 
          I’m always learning, always growing, and always looking for ways to make a positive difference in the world.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;