import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = ({ handleSubmit }) => {


  const [email, setEmail] = useState(''); // Declare email state
  const [password, setPassword] = useState(''); // Declare password state
  
    const navigate = useNavigate()
    const handleLoginSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', {email, password})
      .then(result => {
        console.log(result)
        if (result.data === "success"){
          setEmail('')
          setPassword('')
          setTimeout(() => {
            navigate('/home');  // Navigate to the home page after delay
          }, 2000);  // 2-second delay (2000ms)

          // Optionally, show success message
          toast.success('Login successful!');
          
        }else{
          toast.error('Login failed. Please check your credentials.');
        }
      }
      )
      .catch((err) => console.log(err));
      
    }
  
  return (
    <div className="form-box login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="forgot-link">
          <a href="#">Forgot password</a>
        </div>
        <button type="submit" className="btn" onClick={handleLoginSubmit}> 
          Login
        </button>
        <p>or login with social media platforms</p>
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

export default Login;
