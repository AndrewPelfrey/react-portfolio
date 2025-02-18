import React from "react";
import { useLocation } from 'react-router-dom';

import "./Footer.css";
import FooterNav from "./FooterNav";

function Footer() {
    const location = useLocation();
    return (
        <footer className="footer">
            <p>Built with React | © 2025 Andrew Pelfrey. </p>
            <div>
            <div className="social-links">
                <div className="footer-social-links">
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
        </div>
        <div className="footer-navigation">
        <FooterNav />
        </div>

        </footer>
    );
}

export default Footer;