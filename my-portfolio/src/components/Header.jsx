import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            {/* <h1 className="header-title">ANDREW PELFREY</h1>
            <p>THE FUTURE OF WEB DEVELOPMENT</p> */}
            <Navigation />
        </header>
    );
}

export default Header;