import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderConfirmation.css'; // Create this CSS file for styling
import HeaderMain from './HeaderMain';


const OrderConfirmation = () => {
    const navigate = useNavigate();

    const handleBackToMenu = () => {
        navigate('/food-court'); // Assuming '/menu' is the route to your menu page
    };

    return (
        <>
            <HeaderMain />
            <div className="order-confirmation-container">
                <button className="back-to-menu-button" onClick={handleBackToMenu}>
                    &#8592; Back to Menu
                </button>
                <div className="checkmark-circle">
                    <span>&#10003;</span> {/* Checkmark symbol */}
                </div>
                <h1>Thank you, your order has been successfully placed!</h1>
            </div>
            
        </>
    );
};

export default OrderConfirmation;
