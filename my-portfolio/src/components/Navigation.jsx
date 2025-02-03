import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    
    return (
        <nav>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/about"
                     className={location.pathname === "/about" ? "active" : ""}
                      onClick={toggleMenu}>About</Link> 
                </li>
                <li>
                    <Link to="/portfolio"
                     className={location.pathname === "/portfolio" ? "active" : ""}
                    onClick={toggleMenu}>Portfolio</Link> 
                </li>
                <li>
                    <Link to="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                    onClick={toggleMenu}>Contact</Link> 
                </li>
                <li>
                    <Link to="/resume" 
                     className={location.pathname === "/resume" ? "active" : ""}
                    onClick={toggleMenu}>Resume</Link> 
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;