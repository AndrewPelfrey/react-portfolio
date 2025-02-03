import React, { useEffect } from "react";
import "./AboutMe.css";

function AboutMe() {
    useEffect(() => {
        const cards = document.querySelectorAll('.card');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.3});

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <>
        <div className="intro">
            <h1>Andrew Pelfrey</h1>
            <p>Aspiring Developer</p>
            <div className="social-links">
                <a href="https://github.com/AndrewPelfrey" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/github.png" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/andrew-pelfrey" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://instagram.com/apelfreyy" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/instagram.png" alt="Intstagram" />
                </a>
            </div>
        </div>

        <div className="about-me-grid">
            <div className="card left">
                <h2>About</h2>
                <p>
                I am a dedicated and passionate full-stack web developer, currently pursuing a Software Development/Full Stack certificate from Case Western Reserve University. With a strong foundation in JavaScript, Node.js, React, TypeScript, SQL, and more. I strive to create innovative, user-friendly solutions to everyday challenges. My hands-on experience has shaped me into a problem-solver with a constant desire to learn and grow.
                </p>
            </div>
            <div className="image">
            <img src="src/assets/man-working-on-a-laptop-from-side-view.png" alt="Placeholder" className="small-icon"/>
            </div>

      <div className="image">
      <img src="src/assets/code.png" alt="Placeholder" className="small-icon"/>
      </div>
            <div className="card right">
                <h2>Skills</h2>
                <p>
                I specialize in front-end development, crafting polished, responsive UIs. I am proficient in React, HTML, CSS, JavaScript, TypeScript, and SQL, with hands-on experience using tools like Node.js, Sequelize, Bootstrap, Git, and GitHub. I am committed to mastering new technologies and adapting to the ever-evolving world of web development, ensuring seamless and engaging user experiences.
                </p>
            </div>
            <div className="card left">
                <h2>Experience</h2>
                <p>
                Currently working as a server at a fine dining Italian restaurant, I have honed excellent problem-solving skills and the ability to collaborate in fast-paced, high-pressure environments. I contribute to team success through effective communication and an eye for detail. My role has strengthened my time management, multitasking, and customer service skills, which complement my technical expertise in web development.
                </p>
            </div>
            <div className="image">
            <img src="src/assets/united.png" alt="Placeholder" className="small-icon"/>
            </div>

      <div className="image">
      <img src="src/assets/gaming.png" alt="Placeholder" className="small-icon" />
      </div>
            <div className="card right">
                <h2>Hobbies</h2>
                <p>
                Outside of coding, I enjoy spending time with friends, traveling to new destinations, and exploring diverse cultures. I also enjoy learning new things and staying active through sports. Whether it's on a hiking trail or playing team sports, I value teamwork and the lessons that come from both individual and group activities. These experiences help me stay motivated and foster creativity in both my personal and professional life.
                </p>
            </div>
        </div>
        </>
    )
}

export default AboutMe;