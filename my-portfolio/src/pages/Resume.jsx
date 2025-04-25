import React from "react";
import "./Resume.css";
import resumePDF from "/assets/AndrewPelfrey_resume.pdf";
import profileImage from "/assets/portfolio-image.jpg";

 const Resume = () => {
    return (
      <div className="resume-container">
        
        <div className="resume-left">
          <h2>Contact</h2>
          <p><a href="mailto:pelfreya6@gmail.com">pelfreya6@gmail.com</a></p>
          <p><a href="https://endearing-biscotti-e6931d.netlify.app/about" target="_blank">Portfolio</a></p>
          <p><a href="https://github.com/AndrewPelfrey" target="_blank">GitHub</a></p>
          <p><a href="https://www.linkedin.com/in/andrew-pelfrey-12664a1a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</a></p>
  
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Express</li>
            <li>REST APIs</li>
            <li>SQL, MySQL, PostgreSQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Authentication</li>
            <li>Git</li>
          </ul>
        </div>
  
        <div className="resume-right">
            <div className="name-section">
          <h1>ANDREW PELFREY</h1>
          <img src={profileImage} alt="Andrew Pelfrey" className="profile-image" />

          </div>
          <p className="subtitle">Software Developer | 440-222-6719</p>
          <div className="download-resume">
            <a href={resumePDF} download="AndrewPelfrey_resume.pdf">
              <button>Download Resume</button>
            </a>
          </div>
  
          <h2>Profile</h2>
          <p>
            Motivated and detail-oriented Full-Stack Developer with a strong foundation in JavaScript, TypeScript, React, and Node.js.
            Passionate about building dynamic, user-friendly applications and solving complex problems with clean, efficient code.
            Strong skills in front-end and back-end technologies, with experience integrating APIs, databases, and authentication systems.
          </p>
          <div className="skills-mobile">
    <h2>Skills</h2>
    <ul>
      <li>HTML & CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>TypeScript</li>
      <li>Express</li>
      <li>REST APIs</li>
      <li>SQL, MySQL, PostgreSQL</li>
      <li>Sequelize</li>
      <li>MongoDB</li>
      <li>Authentication</li>
      <li>Git</li>
    </ul>
  </div>
          <h2>Projects</h2>
  
          <div className="project">
            <h3>AutoScout Car Dealership</h3>
            <p>Developed a web-based platform that emulates a 
                used car dealership’s functionality for both customers and 
                employees.</p>
            <ul>
              <li>Implemented vehicle listings, search functionality, 
                and user authentication for a seamless user experience.</li>
              <li>Built a secure backend with PostgreSQL, Sequelize, and 
                JWT authentication.</li>
              <li>Utilized React and TypeScript to create a responsive and
                 dynamic frontend.</li>
              <li>Integrated bcrypt for secure password hashing and Express 
                for efficient API routing.</li>
              <li>Deployed the application using Vite and Render for a smooth 
                development and production workflow.</li>
            </ul>
            <p><strong>Tech Stack:</strong> TypeScript, React, Node.js, Express, 
            PostgreSQL, Sequelize, Vite, JWT, bcrypt</p>
            <p><a href="https://github.com/AndrewPelfrey/used-car-dealer" target="_blank">GitHub</a> |  
              <a href="https://used-car-dealer.onrender.com/" target="_blank"> Live Demo</a></p>
          </div>
  
          <div className="project">
            <h3>Chasing the Golden Hours</h3>
            <p>Developed a sunset dashboard to help photographers plan their 
                photoshoots with real-time data.</p>
            <ul>
              <li>Integrated the Sunrise Sunset API to provide accurate sunset 
                times based on user location.</li>
              <li>Implemented Google Maps API for GPS directions to optimal 
                photography spots.</li>
              <li>Designed a responsive and user-friendly interface using Bulma
                 and jQuery.</li>
              <li>Added light/dark mode options for improved accessibility and 
                user experience.</li>
              <li>Contributed to API integration and core functionality as part of
                 my first group project.</li>
            </ul>
            <p><strong>Tech Stack:</strong> JavaScript, Google Maps API,
             Sunrise Sunset API, Bulma, jQuery, DayJS</p>
            <p><a href="https://github.com/AndrewPelfrey/ChasingtheGoldenHours" target="_blank">GitHub</a> |  
              <a href="https://andrewpelfrey.github.io/ChasingtheGoldenHours/" target="_blank"> Live Demo</a></p>
          </div>
  
          <h2>Education</h2>
          <p><strong>Software Development Certificate</strong>, Case Western Reserve University, Cleveland</p>
          <p>November 2023 — April 2025</p>
          <p>Completed a full-stack web development certificate,
             learning JavaScript, React, Node.js, SQL, API integration, 
             and more.</p>
  
          <h2>Employment History</h2>
         <p><strong>Server at Via Roma</strong>, North Royalton</p>
         <p>August 2024 — Present</p>
         <ul>
         <li>Developed strong problem-solving, communication, 
            and teamwork skills.</li>
         <li>Managed high-paced environments and customer 
            interactions efficiently.</li>
        </ul>

        <p><strong>Server at The Rail</strong>, Cleveland</p>
        <p>2022 — August 2024</p>

         <p><strong>Stocker at Giant Eagle</strong>, Cleveland</p>
<         p>2018 — 2022</p>

          
        </div>
      </div>
    );
  };
  
  export default Resume;