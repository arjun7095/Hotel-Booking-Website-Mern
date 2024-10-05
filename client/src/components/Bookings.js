// Booking.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Booking.css'; // Add your styles here
import HeaderMain from './HeaderMain';
import Footer from './Footer';

const Booking = () => {
    const [roomType, setRoomType] = useState('');
    const [roomPrice, setRoomPrice] = useState(0);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [availableRooms, setAvailableRooms] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchAvailableRooms = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/get/rooms');
                setAvailableRooms(response.data);
            } catch (error) {
                console.error('Error fetching available rooms:', error);
            }
        };

        fetchAvailableRooms();
    }, []);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const type = queryParams.get('roomType');
        if (type) {
            setRoomType(type);
            fetchRoomPrice(type);
        }
    }, [location.search]);

    const fetchRoomPrice = async (type) => {
        try {
            console.log(`Fetching price for room type: ${type}`);
            const response = await axios.get(`http://localhost:5000/api/get/rooms/${type}`);
            console.log('API response:', response.data);
            setRoomPrice(response.data.price);
        } catch (error) {
            console.error('Error fetching room price:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/booking/create', {
                roomType,
                roomPrice,
                checkInDate,
                checkOutDate,
                name,
                contactNumber
            });
    
            if (response.status === 200) {
                setSuccessMessage('Booking successful!');
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/rooms'); // Redirect to home or another page
                }, 2000); // Show message for 2 seconds
            }
        } catch (error) {
            setError('Booking failed');
        }
    };
    

    // Function to get current datetime in the format required for input fields
    const getCurrentDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const currentDateTime = getCurrentDateTime();

    return (
        <>
            <div style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/2690549.jpg")',height:'120vh', backgroundSize: 'cover' }}>
                <HeaderMain />
                <div className="booking-container">
                    <h1>Book Your Room</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Room Type:</label>
                            <select value={roomType} onChange={(e) => {
                                setRoomType(e.target.value);
                                fetchRoomPrice(e.target.value);
                            }} required>
                                <option value="">Select Room Type</option>
                                {availableRooms.map((room) => (
                                    <option key={room._id} value={room.type}>{room.type}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Price:</label>
                            <input type="text" value={`$${roomPrice}`} readOnly />
                        </div>
                        <div>
                            <label>Check-In Date and Time:</label>
                            <input
                                type="datetime-local"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                min={currentDateTime}
                                required
                            />
                        </div>
                        <div>
                            <label>Check-Out Date and Time:</label>
                            <input
                                type="datetime-local"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                min={currentDateTime}
                                required
                            />
                        </div>
                        <div>
                            <label>Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                            <label>Contact Number:</label>
                            <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
                        </div>
                        <button type="submit">Book Now</button>
                        {error && <p className="error">{error}</p>}
                        {successMessage && <p className="success">{successMessage}</p>}
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Booking;
