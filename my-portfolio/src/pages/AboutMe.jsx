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
            <p>Full Stack Developer</p>
            <div className="social-links">
                <a href="https://github.com/AndrewPelfrey" target="_blank" rel="noopener noreferrer">
                <img src="/assets/github.png" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/andrew-pelfrey-12664a1a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://instagram.com/apelfreyy" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram.png" alt="Intstagram" />
                </a>
            </div>
        </div>

        <div className="about-me-grid">
            <div className="card left">
                <h2>About</h2>
                <p>
                As a dedicated full-stack developer, 
                I build dynamic and efficient web applications with a
                 strong focus on clean, scalable code. My expertise spans
                  front-end and back-end technologies, allowing me to
                  develop seamless user experiences and optimize performance 
                  across the stack. My hands-on experience has shaped me into 
                a problem-solver with a constant desire to learn and grow.
                </p>
            </div>
            <div className="image">
            <img src="/assets/man-working-on-a-laptop-from-side-view.png" alt="Placeholder" className="small-icon"/>
            </div>

      <div className="image">
      <img src="/assets/code.png" alt="Placeholder" className="small-icon"/>
      </div>
            <div className="card right">
                <h2>Skills</h2>
                <p>
                I specialize in full-stack development, crafting polished, 
                responsive applications. I am proficient in React, HTML, CSS, JavaScript, 
                TypeScript, SQL, and more with hands-on experience using tools like 
                Node.js, Sequelize, Bootstrap, Git, and GitHub. I am 
                committed to mastering new technologies and adapting to the 
                ever-evolving world of web development, ensuring seamless and 
                engaging user experiences.
                </p>
            </div>
            <div className="card left">
                <h2>Experience</h2>
                <p>
                Currently working as a server at a fine dining Italian 
                restaurant, I have honed excellent problem-solving skills 
                and the ability to collaborate in fast-paced, high-pressure 
                environments. I contribute to team success through effective 
                communication and an eye for detail. My role has strengthened 
                my time management, multitasking, and customer service skills,
                 which complement my technical expertise in web development.
                </p>
            </div>
            <div className="image">
            <img src="/assets/united.png" alt="Placeholder" className="small-icon"/>
            </div>

      <div className="image">
      <img src="/assets/gaming.png" alt="Placeholder" className="small-icon" />
      </div>
            <div className="card right">
                <h2>Hobbies</h2>
                <p>
                Outside of coding, I enjoy spending time with friends
                and following sports. In my free time, I love to 
                dive into new things and learn new things.
                I find it very rewarding to solve problems and
                help others along the way.  
                Whether it’s through coding, collaborating with others, or 
                diving into something new, I strive for growth and continuous
                improvement. 
                </p>
            </div>
        </div>
        </>
    )
}

export default AboutMe;