import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const creatorName = "Rushindhra";
  
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div className="social-links">
              <a href="https://github.com/Rushindhra" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:marrirushindhra2401@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://linkedin.com/in/rushindhra-marri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
            
            <div className="footer-divider"></div>
            
            <p className="copyright">
              &copy; {currentYear} Weather Dashboard. Created with <FaHeart className="heart-icon" /> by {creatorName}
            </p>
            
            <p className="footer-disclaimer">
              Powered by OpenWeather API. This app is for educational purposes only.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;