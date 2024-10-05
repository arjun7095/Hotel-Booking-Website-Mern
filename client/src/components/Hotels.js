import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Chatbot.css';

const HotelsList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hotels');
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <strong>{hotel.name}</strong> - {hotel.location}
            <br />
            Room Types: {hotel.roomTypes.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelsList;
