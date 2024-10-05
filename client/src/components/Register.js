import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = ({ onLoginClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password, mobileNumber });
      setSuccessMessage('Successfully registered!');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/');
      }, 2000);
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className='register'>
      {successMessage && (
        <div className="success-message animate__animated animate__fadeIn animate__delay-1s">
          {successMessage}
        </div>
      )}
      <div className="register-container animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="animate__animated animate__bounceIn">Register</h2>
        <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn animate__delay-2s">
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label>Mobile Number:</label>
            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
          </div>
          <button type="submit" className="animate__animated animate__pulse animate__delay-3s">Register</button>
          {error && <p className="animate__animated animate__shakeX animate__delay-4s">{error}</p>}
          <div className="login-link">
        <p style={{'fontSize':'15px'}}>Already have an account? <span onClick={onLoginClick} style={{ color: 'blue', cursor: 'pointer' }}>Login here..</span></p>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
