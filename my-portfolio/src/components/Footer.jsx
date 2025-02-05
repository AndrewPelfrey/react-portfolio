import React from "react";
import { useLocation } from 'react-router-dom';

import "./Footer.css";
import FooterNav from "./FooterNav";

function Footer() {
    const location = useLocation();
    return (
        <footer className="footer">
            <p>Built with React | Hosted on Netlify | © 2025 Andrew Pelfrey. </p>
            <div>
            <div className="social-links">
                <div className="footer-social-links">
                <a href="https://github.com/AndrewPelfrey" target="_blank" rel="noopener noreferrer">
                <img src="/assets/github.png" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/andrew-pelfrey" target="_blank" rel="noopener noreferrer">
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