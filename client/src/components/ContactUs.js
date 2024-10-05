import React from 'react';
import HeaderMain from './HeaderMain';
import Footer from './Footer';
import '../styles/ContactUs.css'; // Make sure to create and style this CSS file

const ContactUs = () => {
    return (
        <>
            <HeaderMain />
            <div className="contact-us-container">
                <h1>Contact Us</h1>
                <div className="contact-us-content">
                    <p>
                        If you have any questions or need assistance, please feel free to reach out to us. 
                        Our team is here to help you with any inquiries you may have.
                    </p>
                    
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p><strong>Phone:</strong> +91 7095111547</p>
                        <p><strong>Email:</strong> durgamallikarjunaboyapati@gmail.com</p>
                        <p><strong>Address:</strong> 1-24 kukatlapally, Bapatla, Andhra Pradesh, 523303</p>
                    </div>

                    <div className="location">
                        <h2>Our Location</h2>
                        <div className="map-container">
                            <iframe 
                                title="Hotel Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7671.941768010622!2d79.92472169111642!3d15.96289683880519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a8d005bebae25%3A0x74bba856948cdf63!2sBoyapati%20Ajay%20Kumar%20dairy%20farm!5e0!3m2!1sen!2sin!4v1726063599392!5m2!1sen!2sin" 
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                height='300'
                                width='600'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
