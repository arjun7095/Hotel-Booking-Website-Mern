import React from 'react';
import HeaderMain from './HeaderMain';
import Footer from './Footer';
import '../styles/AboutUs.css'; // Make sure to create and style this CSS file as needed

const AboutUs = () => {
    return (
        <>
            <HeaderMain />
            <div className="about-us-container">
                <h1>About Us</h1>
                <div className="about-us-content">
                    <p>
                        Welcome to Hotel Navayuga , where luxury meets comfort. Our hotel offers 
                        an unparalleled experience in hospitality and service. Located in the heart 
                        of Hyderabad, we provide a range of accommodations and amenities to ensure 
                        a memorable stay.
                    </p>
                    <p>
                        Our history dates back to 1947, and we have been dedicated to providing 
                        exceptional service ever since. Our team is passionate about creating 
                        a warm and welcoming environment for every guest. We pride ourselves on 
                        our attention to detail and commitment to excellence.
                    </p>
                    <p>
                        At Hotel Navayuga, you can enjoy world-class dining, a relaxing spa, and 
                        modern facilities designed to cater to your every need. Whether you're 
                        here for business or pleasure, our staff is here to ensure your stay is 
                        as enjoyable and stress-free as possible.
                    </p>
                    <p>
                        Thank you for choosing Hotel Navayuga. We look forward to making your stay 
                        unforgettable.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
