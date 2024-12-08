import React from 'react';
import '../styles/footer.css'; // Import the new footer CSS file
import GitHubPic from '../assets/github-icon.png';
import LinkedInPic from '../assets/linkedin-icon.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Kenny Light. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/kenlight-bu" target="_blank" rel="noopener noreferrer">
          <img src={GitHubPic} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/kennethlight/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInPic} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;