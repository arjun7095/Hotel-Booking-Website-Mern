import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Bookings from './components/Bookings'; 
import Profile from './components/Profile'; 
import FoodCourt from './components/FoodCourt'; 
import AboutUs from './components/AboutUs'; 
import ContactUs from './components/ContactUs'; 
import  AuthWrapper  from './components/AuthWrapper';
import Main from './components/Main';
import Rooms from './components/Rooms';
import Booking from './components/Bookings';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
// import HeaderMain from './components/HeaderMain';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route element={<AuthWrapper />}>
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/food-court" element={<FoodCourt />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />

        {/* <Route path="/home" element={<Home />} /> */}

        </Route>
      </Routes>
    </div>
  );
};

export default App;
