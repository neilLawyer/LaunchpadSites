import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create or update this CSS file

const Header = () => {
    return (
        <header className="navbar">
            <h1 className="logo">Launchpad sites</h1>
        <img className="picturelogo" src="IMG_0841 (2).jpeg"/>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
