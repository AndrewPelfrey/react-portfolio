import React from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Car Dealership",
    description: "Still in progress.",
    image: "/images/project1.png", 
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project1"
  },
  {
    id: 2,
    title: "README Generator",
    description: "A Node.js command-line tool that generates standardized, professional-quality README files for projects, streamlining the documentation process.",
    image: "/assets/Screenshot 2025-02-05 at 12.40.00 PM.png",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project2"
  },
  {
    id: 3,
    title: "Vehicle Creator App",
    description: "A command-line interface app built using TypeScript that allows users to create and interact with virtual vehicles (cars, trucks, motorbikes). Users can specify details like make, model, color, and year, and even customize wheels. The app constructs dynamic vehicle objects and stores them for further use.",
    image: "/assets/download.jpeg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project3"
  },
  {
    id: 4,
    title: "Chasing The Golden Hours",
    description: "A sunset dashboard built with JavaScript and APIs that helps photographers plan their photoshoots by providing accurate sunset times, directions to optimal viewing locations, and light/dark mode options. The site uses the Sunrise Sunset API and Google Maps API for location-based services. This was my first group project, where I contributed to integrating APIs and building the core functionality of the app.",
    image: "/assets/Screenshot 2024-04-08 at 2.38.45 PM.png",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project2"
  },
  {
    id: 5,
    title: "Employee Tracker",
    description: "Project showcasing my SQL skills I need to publish",
    image: "/assets/download s.jpeg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project2"
  },
  {
    id: 6,
    title: "Piano Pulse",
    description: "A virtual piano built with JavaScript, HTML, and CSS. Users can play 12 interactive keys, record, save compositions with custom names using local storage, and replay them. The app also features customizable themes and Bootstrap modals for improved UI. This project highlights my work with local storage, playback functionality, and UI enhancements.",
    image: "/assets/pianopulse.png",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project2"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <p className="section-title">A collection of projects I have worked on</p>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
