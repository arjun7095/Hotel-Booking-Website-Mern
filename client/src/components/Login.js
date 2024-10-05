import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userEmail',email)
      setSuccessMessage('Successfully logged in!');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/home');
      }, 2000);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='login'>
      {successMessage && (
        <div className="success-message animate__animated animate__fadeIn animate__delay-1s">
          {successMessage}
        </div>
      )}
      <div className="login-container animate__animated animate__fadeIn animate__delay-1s">
        <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="animate__animated animate__bounceIn">Login</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="animate__animated animate__pulse animate__delay-3s">Login</button>
          {error && <p className="animate__animated animate__shakeX animate__delay-4s">{error}</p>}
          <div className="register-link">
        <p style={{'fontSize':'15px'}}>Don't have an account? <span onClick={onRegisterClick} style={{ color: 'blue', cursor: 'pointer' }}>Register here..</span></p>
      </div>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
