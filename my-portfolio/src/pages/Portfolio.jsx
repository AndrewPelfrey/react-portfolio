import React from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "AutoScout Car Dealership",
    description: [
      "A mockup website emulating a used car dealership's page and its functionality for both customers and employees.",
      "Customers can browse available cars, while employees can manage inventory and user interactions.",
      "Implements authentication and authorization using JWT, with bcrypt for secure password storage.",
    ],
    stack: "React, Node.js, Express, PostgreSQL, Sequelize, JWT, bcrypt, Vite",
    image: "/assets/Screenshot 2025-02-17 at 6.30.43 PM.png",
    liveLink: "https://used-car-dealer.onrender.com/",
    githubLink: "https://github.com/AndrewPelfrey/used-car-dealer",
  },
  {
    id: 2,
    title: "README Generator",
    description: [
      "A command-line tool that automates README file generation.",
      "Uses Node.js and prompts users for project details before formatting a professional README.",
    ],
    stack: "Node.js, Inquirer.js",
    image: "/assets/Screenshot 2025-02-05 at 12.40.00 PM.png",
    liveLink: "https://drive.google.com/file/d/1ccSthIurwxaubNncIQQdGw4AjChh28Ih/view?usp=sharing",
    githubLink: "https://github.com/AndrewPelfrey/README-Generator",
  },
  {
    id: 3,
    title: "Vehicle Creator App",
    description: [
      "A CLI app built with TypeScript for creating and customizing virtual vehicles.",
      "Supports motorbike wheelies, truck towing, and dynamic vehicle object creation.",
      "Uses Inquirer.js for interactive user input and validation.",
    ],
    stack: "TypeScript, Inquirer.js, Node.js",
    image: "/assets/download.jpeg",
    liveLink: "https://drive.google.com/file/d/1dQGlCenGilyAVU7jXRExmFIbu0isJbT4/view?usp=sharing",
    githubLink: "https://github.com/AndrewPelfrey/Vehicle-Creator",
  },
  {
    id: 4,
    title: "Employee Tracker",
    description: [
      "A command-line app built with Node.js, MySQL, and JavaScript to manage employee data.",
      "Allows adding, updating, and deleting employee records with SQL queries.",
      "Focuses on SQL proficiency, relational database design, and backend development.",
    ],
    stack: "Node.js, MySQL, JavaScript",
    image: "/assets/download s.jpeg",
    liveLink: "https://drive.google.com/file/d/18HHRwg8pIVdF_-kdRN3OCU4Cd3SHlPQA/view?usp=sharing",
    githubLink: "https://github.com/AndrewPelfrey/employee-tracker",
  },
  {
    id: 5,
    title: "Chasing The Golden Hours",
    description: [
      "A sunset dashboard built with JavaScript and APIs to help photographers plan their photoshoots.",
      "Displays accurate sunset times, GPS directions, and light/dark mode options.",
      "Uses the Sunrise Sunset API and Google Maps API for location-based services.",
      "Contributed to integrating APIs and building core app functionality as part of my first group project.",
    ],
    stack: "JavaScript, Google Maps API, Sunrise Sunset API, Bulma, jQuery, DayJS",
    image: "/assets/Screenshot 2024-04-08 at 2.38.45 PM.png",
    liveLink: "https://andrewpelfrey.github.io/ChasingtheGoldenHours/",
    githubLink: "https://github.com/AndrewPelfrey/ChasingtheGoldenHours",
  },
  {
    id: 6,
    title: "Piano Pulse",
    description: [
      "A virtual piano built with interactive features using JavaScript, HTML, and CSS.",
      "Features music recording and playback, with the ability to save compositions with custom names using local storage.",
      "Includes customizable themes and Bootstrap modals for an improved user interface.",
      "Developed interactive functionality, theme switching, and local storage integration, showcasing my work with UI enhancements and dynamic content.",
    ],
    stack: "HTML5, CSS3, JavaScript, LocalStorage, Bootstrap",
    image: "/assets/pianopulse.png",
    liveLink: "https://jankrajniak.github.io/firstProject/",
    githubLink: "https://github.com/jankrajniak/firstProject",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <p className="section-title">A collection of projects I have worked on</p>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            {/* Make the whole card clickable */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p><em>{project.stack}</em></p>
                {Array.isArray(project.description) ? (
                  <ul>
                    {project.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
            </a>

            {/* Keep the "Live Demo" button inside the card */}
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-button"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
