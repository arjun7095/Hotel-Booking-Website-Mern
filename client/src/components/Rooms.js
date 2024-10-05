import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Rooms.css'; // Add your styles here
import HeaderMain from './HeaderMain';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false); // State to track if the user is admin
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/get/rooms');
                setRooms(response.data);
            } catch (error) {
                console.error('Error fetching the room data:', error);
            }
        };

        // Fetch rooms initially
        fetchRooms();

        // Set interval to refresh the data every 5 seconds
        const intervalId = setInterval(fetchRooms, 5000);

        // Check if the logged-in user is the admin
        const checkAdmin = () => {
            const loggedInUser = localStorage.getItem('userEmail');
            if (loggedInUser === 'admin@gmail.com') {
                setIsAdmin(true);
            }
        };
        checkAdmin();

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleBookNow = (roomType) => {
        navigate(`/booking?roomType=${roomType}`);
    };

    const handleUnbook = async (roomId) => {
        try {
            await axios.put(`http://localhost:5000/api/get/update/room/${roomId}`, { status: 'Available' });
            alert('Room status updated to Available');
        } catch (error) {
            console.error('Error updating room status:', error);
            alert('Failed to update room status');
        }
    };

    return (
        <>
            <div style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/2690549.jpg")', backgroundSize: 'cover' }}>
                <HeaderMain />
                <div className="rooms-container">
                    <h1>Available Rooms</h1>
                    <div className="rooms-list">
                        {rooms.map((room) => (
                            <div key={room._id} className="room-card">
                                <img src={room.imageUrl} alt={room.type} className="room-image" />
                                <h2>{room.type}</h2>
                                <p>{room.description}</p>
                                <p style={{color:'orangered'}} className='price'><strong>Price:</strong> ${room.price}</p>
                                <p className='status'><strong>Status:</strong> {room.status === 'Available' ? '🟢 Available' : '🔴 Booked'}</p>
                                <div className="buttons-container">
                                    {room.status === 'Available' && (
                                        <button className='room-button' onClick={() => handleBookNow(room.type)}>Book Now</button>
                                    )} 
                                    {isAdmin && (
                                        <button className='room-button' onClick={() => handleUnbook(room._id)}>Unbook</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Rooms;
