import React from 'react';
import './About.css'; // Ensure this is the correct path
import teamImage from '../assets/team.jpg'; // Path to your team image
import missionImage from '../assets/mission.jpg'; // Path to your mission image

const About = () => {
    return (
        <section id="about">
            <h2>About Us</h2>
            <div className="about-content">
                <img src={teamImage} alt="Our Team" className="team-image" />
                <div className="text-section">
                    <p>
                        Welcome to <strong>Your Company Name</strong>, where we are dedicated to helping small businesses thrive in the digital landscape.
                    </p>
                    <p>
                        Our mission is to empower local entrepreneurs by providing high-quality web development services tailored to their unique needs. We believe that every business deserves a strong online presence, and we are committed to making that happen—at no cost to our community.
                    </p>
                </div>
            </div>

            <h3>Our Values</h3>
            <ul>
                <li><strong>Integrity:</strong> We believe in being honest and transparent in all our dealings.</li>
                <li><strong>Innovation:</strong> We strive to stay ahead of the curve and embrace new technologies.</li>
                <li><strong>Community:</strong> We are passionate about supporting local businesses and contributing to our community.</li>
                <li><strong>Customer Success:</strong> Your success is our success, and we are here to support you every step of the way.</li>
            </ul>

            <div className="mission-section">
                <div className="text-section">
                    <p>
                        Join us on this journey, and let us help you take your business to the next level!
                    </p>
                </div>
                <img src={missionImage} alt="Our Mission" className="mission-image" />
            </div>
        </section>
    );
};

export default About;
