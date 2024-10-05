import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/FoodCourt.css'; // Create this CSS file for styling
import HeaderMain from './HeaderMain';
import Footer from './Footer';

const FoodCourt = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [filter, setFilter] = useState('All');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                let url = 'http://localhost:5000/api/food/all';
                if (filter !== 'All') {
                    url = `http://localhost:5000/api/food/${filter}`;
                }
                const response = await axios.get(url);
                setFoodItems(response.data);
            } catch (error) {
                console.error('Error fetching the food items:', error);
            }
        };

        fetchFoodItems();
    }, [filter]);

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const handleAddToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(cartItem => cartItem._id === item._id);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Item added to cart:', item);
        alert('Item added to cart');
    };

    return (
        <>
            <HeaderMain />
            <div className="food-court-container">
                <h1>Food Court</h1>
                <div className="filter-buttons">
                    <button onClick={() => handleFilterChange('All')}>All</button>
                    <button onClick={() => handleFilterChange('Veg')}>Veg</button>
                    <button onClick={() => handleFilterChange('Non-Veg')}>Non-Veg</button>
                    <button onClick={() => handleFilterChange('Biryani\'s')}>Biryani's</button>
                    <button onClick={() => handleFilterChange('Veg Curries')}>Veg Curries</button>
                    <button onClick={() => handleFilterChange('Non-Veg Curries')}>Non-Veg Curries</button>
                    <button onClick={() => handleFilterChange('Starters')}>Starters</button>
                    <button onClick={() => handleFilterChange('Roties')}>Roties</button>
                    <button onClick={() => handleFilterChange('Beverages')}>Beverages</button>
                    <button onClick={() => handleFilterChange('Fast Foods')}>Fast Foods</button>
                </div>
                <div className="food-items-list">
                    {foodItems.map((item) => (
                        <div key={item._id} className="food-item-card">
                            <img src={item.imageUrl} alt={item.name} className="food-item-image" />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p className="price"><strong>Price:</strong> ${item.price}</p>
                            <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
                <button className="cart-button" onClick={() => navigate('/cart')}>
                    Cart
                </button>
            </div>
            <Footer />
        </>
    );
};

export default FoodCourt;
