import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css'; // Create this CSS file for styling
import HeaderMain from './HeaderMain';
import Footer from './Footer';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [billingInfo, setBillingInfo] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Load cart items from local storage
        const loadedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(loadedCartItems);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo({
            ...billingInfo,
            [name]: value
        });
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const handlePlaceOrder = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/food/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    billingInfo: billingInfo,
                    cartItems: cartItems,
                    totalPrice: calculateTotalPrice()
                })
            });
    
            if (response.ok) {
                const order = await response.json();
                console.log('Order placed successfully:', order);
    
                // Clear cart and redirect
                localStorage.removeItem('cart');
                setCartItems([]);
                navigate('/order-confirmation');
            } else {
                console.error('Failed to place order');
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };
    

    return (
        <>
            <HeaderMain />
            <div className="checkout-container">
                <h1>Checkout</h1>
                <div className="billing-info">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={billingInfo.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={billingInfo.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={billingInfo.address}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={billingInfo.city}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={billingInfo.state}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="zip"
                        placeholder="Zip Code"
                        value={billingInfo.zip}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="order-summary">
                    <h2>Order Summary</h2>
                    {cartItems.map((item) => (
                        <div key={item._id} className="order-item">
                            <p>{item.name} (x{item.quantity}) - ${item.price}</p>
                        </div>
                    ))}
                    <p className="total-price"><strong>Total Price:</strong> ${calculateTotalPrice()}</p>
                </div>

                <button className="place-order-button" onClick={handlePlaceOrder}>
                    Place Order
                </button>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
