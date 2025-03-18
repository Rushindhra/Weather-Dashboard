import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloudSun } from 'react-icons/fa';
import { IoArrowBackOutline } from "react-icons/io5";
const About = () => {
  const styles = {
    aboutPage: {
      background: "linear-gradient(135deg, #72b1d4, #4b86b4)",
      minHeight: '100vh',
      paddingBottom: '2rem'
    },
    container: {
      padding: '2rem 1rem'
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    navLinkCustom: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '1.2rem',
      padding: '0.5rem 1rem',
      fontWeight: '500'
    },
    headerRow: {
      marginBottom: '3rem',
      textAlign: 'center'
    },
    aboutIcon: {
      fontSize: '3.5rem',
      color: '#ffffff',
      marginBottom: '1.5rem'
    },
    aboutTitle: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ffffff'
    },
    aboutSubtitle: {
      fontSize: '1.3rem',
      color: '#ffffff',
      marginBottom: '2.5rem',
      opacity: '0.9'
    },
    contentRow: {
      marginBottom: '1.5rem'
    },
    aboutCard: {
      border: 'none',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    },
    cardBody: {
      padding: '1.5rem'
    },
    cardBodyCenter: {
      padding: '1.5rem',
      textAlign: 'center'
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#0275d8',
      marginBottom: '1.5rem',
      textDecoration: 'underline',
      textDecorationColor: '#0275d8',
      textDecorationThickness: '2px',
      textUnderlineOffset: '8px',
      paddingBottom: '6px'
    },
    aboutText: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#495057',
      marginBottom: '1rem'
    },
    missionText: {
      fontStyle: 'italic',
      fontWeight: '500',
      fontSize: '1.3rem',
      color: '#495057',
      lineHeight: '1.8',
      padding: '0.5rem 1rem 1rem'
    }
  };

  return (
    <div style={styles.aboutPage}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.navLinkCustom}>
          <h2><IoArrowBackOutline /></h2>
        </Link>
      </div>

      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.headerRow}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <FaCloudSun style={styles.aboutIcon} />
            <h1 style={styles.aboutTitle}>About Weather Dashboard</h1>
            <p style={styles.aboutSubtitle}>
              A modern, responsive weather application providing real-time weather data
            </p>
          </div>
        </div>

        {/* Application Description Section */}
        <div style={styles.contentRow}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={styles.aboutCard}>
              <div style={styles.cardBody}>
                <h2 style={styles.sectionTitle}>Our Application</h2>
                <p style={styles.aboutText}>
                  Weather Dashboard provides accurate and up-to-date weather information for locations around the world.
                  Built with modern web technologies, our application offers a clean and intuitive interface for checking
                  current weather conditions, including temperature, humidity, and air quality index.
                </p>
                <p style={styles.aboutText}>
                  Our application features real-time updates, hourly forecasts, and a five-day outlook to help you stay
                  informed about changing weather conditions. We also provide historical weather data for comparative analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div style={styles.contentRow}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={styles.aboutCard}>
              <div style={styles.cardBodyCenter}>
                <h2 style={styles.sectionTitle}>Our Mission</h2>
                <p style={styles.missionText}>
                  "To provide accessible, accurate weather information through an intuitive interface,
                  helping users make informed decisions based on current weather conditions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;