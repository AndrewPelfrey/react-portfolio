import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./FooterNav.css"; 
function FooterNav() {
    const location = useLocation();

    return (
        <nav className="footer-nav">
            <ul className="footer-nav-links">
                <li>
                    <Link to="/about"
                     className={location.pathname === "/about" ? "active" : ""}>
                      About
                    </Link> 
                </li>
                <li>
                    <Link to="/portfolio"
                     className={location.pathname === "/portfolio" ? "active" : ""}>
                    Portfolio
                    </Link> 
                </li>
                <li>
                    <Link to="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}>
                    Contact
                    </Link> 
                </li>
                <li>
                    <Link to="/resume" 
                     className={location.pathname === "/resume" ? "active" : ""}>
                    Resume
                    </Link> 
                </li>
            </ul>
        </nav>
    );
}

export default FooterNav;
