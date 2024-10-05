import React, { useState } from "react";
import Header from "./header";
import '../styles/Main.css';
import Login from './Login'; 
import Register from './Register';

function Main() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/2690549.jpg")', height: '100vh', backgroundSize: 'cover' }}>
      <Header />
      <p align='center' className='main-p'>Welcome to the Hotel Navayuga!!!</p>
      <div className="main-div">
        <div className="left">
          <p className="main-quote">THE GREAT <br />ADVANTAGE OF A<br /> HOTEL IS THAT IT IS <br />A REFUSE FROM <br />HOME LIFE.<br /><span>  -- GEORGE BERNARD SHAW</span></p>
        </div>
        <div className="right">
          <div className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
            <div className="flipper">
              <div className="front">
                <Login onRegisterClick={handleFlip} />
              </div>
              <div className="back">
                <Register onLoginClick={handleFlip} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
