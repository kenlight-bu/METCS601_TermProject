import React from 'react';
import '../styles/resumePage.css';

const ResumePage: React.FC = () => {
  return (
    <div className="resume-page">
      {/* Left Section: Professional Experience */}
      <section className="experience">
        <h1>Professional Experience</h1>

        <div className="job">
          <h2>Full Stack Senior Software Developer</h2>
          <p className="job-meta">U.S. Sugar, Clewiston, Florida, United States | June 2012 – Present</p>
          <ul>
            <li>Lead developer in designing and implementing a new Laboratory Information Management System (LIMS).</li>
            <li>Developed an innovative application to collect Wi-Fi quality metadata, increasing device connectivity to 100%.</li>
            <li>Spearheaded an application to track citrus tree growth from seedling to tree, improving insights into expenses, chemical usage, and tree survival rates.</li>
            <li>Created a Windows service that pulls weather information via API, enhancing freeze awareness for farm fields.</li>
            <li>Developed a web-based tool for registering and monitoring agricultural assistants, ensuring adequate staffing during the crop season.</li>
            <li>Built a WPF desktop application for laboratory managers, optimizing workflow processes for sample test reviews and management.</li>
          </ul>
        </div>

        <div className="job">
          <h2>Software Developer III</h2>
          <p className="job-meta">CallMiner, Fort Myers, Florida, United States | June 2006 – May 2012</p>
          <ul>
            <li>Led development of a web application for filtering, categorizing, searching, and playing audio content for speech analytics software.</li>
            <li>Initiated Agile Scrum methodologies, increasing team efficiency by 30%.</li>
            <li>Performed maintenance and updates using JavaScript, reducing load time by approximately 20%.</li>
            <li>Designed and implemented a single-page application using jQuery, HTML, and CSS, improving website responsiveness.</li>
          </ul>
        </div>

        <div className="job">
          <h2>Software Developer II</h2>
          <p className="job-meta">Miva, Inc. | May 2004 – June 2006</p>
          <ul>
            <li>Maintained and enhanced Verizon web API, leveraging web services, C#, SQL Server 2000, message queues, and Windows services.</li>
            <li>Provided customer support and maintenance for a C# ASP.NET partner website.</li>
          </ul>
        </div>
      </section>

      {/* Right Section: Menu */}
      <aside className="menu">
        <section className="skills">
          <h2>Skills & Expertise</h2>
          <div className="skill"><div className="bar" data-skill="C#" style={{ "--skill-level": "96%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="SSRS" style={{ "--skill-level": "95%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="SQL Server" style={{ "--skill-level": "94%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="GitHub" style={{ "--skill-level": "94%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="Agile Methodologies" style={{ "--skill-level": "93%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="MVC" style={{ "--skill-level": "91%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="ASP.Net" style={{ "--skill-level": "90%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="JavaScript" style={{ "--skill-level": "88%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="HTML" style={{ "--skill-level": "87%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="CSS" style={{ "--skill-level": "85%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="Node.js" style={{ "--skill-level": "84%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="CI/CD" style={{ "--skill-level": "83%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="React" style={{ "--skill-level": "65%" } as React.CSSProperties}></div></div>
          <div className="skill"><div className="bar" data-skill="TypeScript" style={{ "--skill-level": "65%" } as React.CSSProperties}></div></div>
        </section>
      </aside>
    </div>
  );
};

export default ResumePage;