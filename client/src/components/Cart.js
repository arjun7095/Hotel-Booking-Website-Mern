import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css'; // Ensure this CSS file handles the layout and styles
import HeaderMain from './HeaderMain';
import Footer from './Footer';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Load cart items from local storage on component mount
        const loadedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(loadedCartItems);
    }, []);

    const updateLocalStorage = (updatedCartItems) => {
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const handleRemoveItem = (id) => {
        // Remove an item from the cart
        const updatedCartItems = cartItems.filter(item => item._id !== id);
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);
    };

    const handleDecreaseQuantity = (id) => {
        // Decrease the quantity of an item
        const updatedCartItems = cartItems.map(item => {
            if (item._id === id) {
                return {
                    ...item,
                    quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);
    };

    const handleIncreaseQuantity = (id) => {
        // Increase the quantity of an item
        const updatedCartItems = cartItems.map(item => {
            if (item._id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);
    };

    const handleClearCart = () => {
        // Clear cart items from state and local storage
        localStorage.removeItem('cart');
        setCartItems([]);
    };

    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    // Function to calculate the total price
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <>
            <HeaderMain />
            <div className="cart-container">
                <h1>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <div key={item._id} className="cart-item-card">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <h2>{item.name}</h2>
                                <p className="price"><strong>Price:</strong> ${item.price}</p>
                                <p className="quantity"><strong>Quantity:</strong> {item.quantity}</p>
                                
                                    <button 
                                        className="decrease-quantity-button" 
                                        onClick={() => handleDecreaseQuantity(item._id)}
                                    >
                                        -
                                    </button>
                                    <button 
                                        className="decrease-quantity-button" 
                                        onClick={() => handleIncreaseQuantity(item._id)}
                                    >
                                        +
                                    </button>
                               
                                <button 
                                    className="remove-item-button" 
                                    onClick={() => handleRemoveItem(item._id)}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                {cartItems.length > 0 && (
                    <div className="cart-summary">
                        <p className="total-price"><strong>Total Price:</strong> ${calculateTotalPrice()}</p>
                        <button className="clear-cart-button" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                        <button className="checkout-button" onClick={handleProceedToCheckout}>
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
