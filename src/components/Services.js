import React from 'react';
import { Link } from 'react-router-dom';
import "./Services.css" // Assuming you create a separate CSS file for services

const Services = () => {
    const services = [
        { id: 1, name: 'Website Development' },
        { id: 2, name: 'SEO Optimization' },
        { id: 3, name: 'Social Media Integration' },
        { id: 4, name: 'Ongoing Support' }
    ];

    return (
        <section id="services">
            <h2>Our Services</h2>
            <div className="service-cards">
                {services.map(service => (
                    <Link to={`/services/${service.id}`} key={service.id} className="service-card">
                        <h3>{service.name}</h3>
                        <p>Click here to learn more about our {service.name} services.</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Services;
