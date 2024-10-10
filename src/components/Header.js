import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create or update this CSS file

const Header = () => {
    return (
        <header className="navbar">
            <h1 className="logo">Launchpad sites</h1>
        <img src="https://mail.google.com/mail/u/0/?ui=2&ik=14d50f149c&attid=0.1&permmsgid=msg-f:1812481502816407734&th=19273a52e95690b6&view=fimg&disp=thd&attbid=ANGjdJ_wtX0WG9kyMz6gG2XBj1o7owxQjEaFa5NbomB281ylEyq3txUBM9r3SwSb_ZcmzyMjESKHxTtCt-eKrZq6ZTr0yy8OsRuejk5Zr1Mgh4PN90bPjY7QXpJmVSU&ats=2524608000000&sz=w1920-h877">
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
