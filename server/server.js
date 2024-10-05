const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/booking');
const hotelsRoute = require('./routes/hotels');
const authRoutes = require('./routes/auth');
const roomRoute = require('./routes/rooms');
const bookRoute = require('./routes/booking');
const foodRoute = require('./routes/foodItems');
const orderRoute = require('./routes/orders');


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/bookings', bookingRoutes);
app.use('/api/hotels', hotelsRoute);
app.use('/api/auth', authRoutes);
app.use('/api/get',roomRoute)
app.use('/api/booking', bookRoute);
app.use('/api/food', foodRoute);
app.use('/api/food', orderRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
