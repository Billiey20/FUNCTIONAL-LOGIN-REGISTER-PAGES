import React, { useState } from 'react';
import './Home.css'; // Assuming you have custom styles

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <div className="logo">
          <h1>My Website</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main>
        <section className="intro">
          <h2>Welcome to My Website</h2>
          <p>This is a complex home page built with React.</p>
        </section>

        <section className="services" id="services">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="card">
              <h3>Web Development</h3>
              <p>Building responsive and functional websites.</p>
            </div>
            <div className="card">
              <h3>App Development</h3>
              <p>Creating mobile applications for iOS and Android.</p>
            </div>
            <div className="card">
              <h3>SEO Optimization</h3>
              <p>Helping your website rank better on search engines.</p>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <h2>About Us</h2>
          <p>We are a team of passionate developers creating amazing experiences for users worldwide.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Website | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
