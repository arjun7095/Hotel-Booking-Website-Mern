import React, { useState, useEffect } from "react";
import HeaderMain from "./HeaderMain";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './Footer';

function Home() {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/get/rooms');
                setRooms(response.data.slice(0, 3)); // Fetch the first three rooms
            } catch (error) {
                console.error('Error fetching the room data:', error);
            }
        };

        fetchRooms();
    }, []);

    return (
        <>
            <div>
                <HeaderMain />
                <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <Carousel align='center'>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src="https://images.alphacoders.com/439/439191.jpg"
                                alt="First slide" height="650"
                            />
                            <Carousel.Caption>
                                <h3>Welcome to Hotel Navayuga</h3>
                                <p>Experience the best stay at our luxurious hotel.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src="https://wallpaperboat.com/wp-content/uploads/2019/11/hotel-02.jpg"
                                alt="Second slide" height="650"
                            />
                            <Carousel.Caption>
                                <h3>Relax and Unwind</h3>
                                <p>Enjoy our top-notch amenities and services.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src="https://images5.alphacoders.com/354/thumb-1920-354773.jpg"
                                alt="Third slide" height="650"
                            />
                            <Carousel.Caption>
                                <h3>Discover the Beauty</h3>
                                <p>Explore the scenic views and vibrant culture around us.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                
                {/* Display three rooms */}
                <div className="rooms-preview">
                    <h2>Our Rooms</h2>
                    <div className="rooms-list">
                        {rooms.map((room) => (
                            <div key={room._id} className="room-card">
                                <img src={room.imageUrl} alt={room.type} className="room-image" />
                                <h3>{room.type}</h3>
                                <p>{room.description}</p>
                            </div>
                        ))}
                    </div>
                    <button className="view-all-button" onClick={() => navigate('/rooms')}>
                        View All
                    </button>
                </div>
            </div>
            <Footer/>
           
        </>
    );
}

export default Home;
