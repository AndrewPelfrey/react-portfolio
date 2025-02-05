import React from "react";

import "./Resume.css";

function Resume() {
    return (
        <section className="resume-container">
            <h2>My Resume</h2>
            <p>Download my resume</p>
            <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
            </a>
        </section>
    );
}

export default Resume;