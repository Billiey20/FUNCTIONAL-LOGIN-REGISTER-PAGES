import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (optional, for front-end)
    if (!username || !email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Make POST request to backend
    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Registration Response:', data);

        // Assuming the backend returns a status field
        if (data.status === 'success') {
          // Clear form fields
          setUsername('');
          setEmail('');
          setPassword('');

          // Show success message
          toast.success('Registration successful!');
        } else if (data.status === 'user_exists') {
          // Show error if the user already exists
          toast.error('User already registered. Please use a different email or username.');
        } else {
          // Show error message for other types of failure
          toast.error(data.message || 'Registration failed. Please try again.');
        }
      })
      .catch((err) => {
        console.error('Registration Error:', err);
        toast.error('An error occurred. Please try again.');
      });
  };

  return (
    <div className="form-box register">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="bx bx-envelope"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <p>or sign up with social media platforms</p>
        <div className="social-icons">
          <a href="#"><i className="bx bxl-google"></i></a>
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-twitter"></i></a>
          <a href="#"><i className="bx bxl-linkedin-square"></i></a>
        </div>
      </form>
    </div>
  );
};

export default Register;
