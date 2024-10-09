import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();

    const serviceDetails = {
        1: "We create beautiful and functional websites tailored to your business needs.",
        2: "Our SEO optimization services will help your business rank higher in search results.",
        3: "Integrate your social media channels for a cohesive online presence.",
        4: "We provide ongoing support and maintenance to keep your website up-to-date."
    };

    return (
        <section>
            <h2>Service Details</h2>
            <p>{serviceDetails[serviceId] || "Service not found."}</p>
            <button onClick={() => navigate('/services')}>Back to Services</button>
        </section>
    );
};

export default ServiceDetail;
