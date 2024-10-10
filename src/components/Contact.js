import React, { useState } from 'react';
import './Contact.css'; // Create this CSS file for styling

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., send to a backend or API)
        console.log({ name, email, message });
        alert('Thank you for your message!');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Please fill out the form below:</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Email: Charandangeti7@gmail.com</p>
                <p>Phone: (925) 384-9399</p>
            </div>
        </section>
    );
};

export default Contact;
