import React from "react";
import "./Footer.css";

const Footer = () => {
  const pdf = "/home/Naga_sai_J_Resume.pdf";

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "NagaSai_Resume.pdf"; 
    link.click();
  };

  const handleContact = () => {
    const phoneNumber = "+919666592066"; 
    const message = encodeURIComponent("Hi! I would like to connect with you.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-main">
          <div className="footer-profile">
            <div className="profile-header">
              <h3 className="profile-name">Naga Sai Kumar Janipireddy</h3>
              <p className="profile-title">
                Full-Stack Developer (MERN) | 3+ Yrs Industry Exp | Ex-Alstom &
                Medha
              </p>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>9666592066</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>saijanipireddy@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            <div className="social-links">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/naga-sai-kumar-janipireddy"
                className="social-link"
              >
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
              <a
                target="_blank"
                href="https://github.com/saijanipireddy"
                className="social-link"
              >
                <span className="social-icon">⚡</span>
                GitHub
              </a>
              <a
                target="_blank"
                href="https://nagasaiportofolio.onrender.com/"
                className="social-link"
              >
                <span className="social-icon">🌐</span>
                Portfolio
              </a>
            </div>
          </div>

          <div className="footer-sections">
            <div className="footer-section">
              <h4>Skills</h4>
              <ul>
                <li>React.js & Next.js</li>
                <li>Node.js & Express</li>
                <li>MongoDB & SQL</li>
                <li>Tailwind CSS</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Experience</h4>
              <ul>
                <li>Zithara.AI</li>
                <li>NxtWave</li>
                <li>Medha Servo Drives</li>
                <li>Alstom</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Projects</h4>
              <ul>
                <li>E-Commerce Platform</li>
                <li>Spotify Clone</li>
                <li>Food Delivery App</li>
                <li>Screen Recorder</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#companies">Companies</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                &copy; 2024 Naga Sai Kumar Janipireddy. All rights reserved.
              </p>
            </div>
            <div className="footer-actions">
              <button className="footer-btn" onClick={handleDownloadResume}>
                Download Resume
              </button>
              <button className="footer-btn secondary" onClick={handleContact}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
