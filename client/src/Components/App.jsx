import { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
import { 
  FaSearch, 
  FaTemperatureHigh, 
  FaWater, 
  FaCloud, 
  FaSun,
  FaSnowflake,
  FaSmog,
  FaCloudRain,
  FaCloudSun
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./Header";
import Footer from "./Footer";
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://weather-dashboard-mk2a.onrender.com/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      alert("City not found.");
    }
    setLoading(false);
    setCity("");
  };

  // Get weather icon based on description and temperature
  const getWeatherIcon = () => {
    if (!weather) return <FaCloudSun className="weather-icon text-warning" />;
    
    const { description, temperature } = weather;
    const desc = description.toLowerCase();
    
    if (desc.includes("clear") || desc.includes("sunny"))
      return <FaSun className="weather-icon text-warning" />;
    if (desc.includes("snow") || temperature < 0)
      return <FaSnowflake className="weather-icon text-info" />;
    if (desc.includes("rain") || desc.includes("drizzle"))
      return <FaCloudRain className="weather-icon text-primary" />;
    if (desc.includes("cloud"))
      return <FaCloud className="weather-icon text-secondary" />;
    if (desc.includes("fog") || desc.includes("mist") || desc.includes("haze"))
      return <FaSmog className="weather-icon text-secondary" />;
    
    return <FaCloudSun className="weather-icon text-warning" />;
  };

  // Background class based on weather
  const getBackgroundClass = () => {
    if (!weather) return "default-bg";
    
    const { temperature, description } = weather;
    const desc = description.toLowerCase();
    
    if (desc.includes("clear") || desc.includes("sunny")) return "sunny-bg";
    if (desc.includes("snow") || temperature < 0) return "snow-bg";
    if (desc.includes("rain") || desc.includes("drizzle")) return "rain-bg";
    if (desc.includes("cloud")) return "cloudy-bg";
    if (desc.includes("fog") || desc.includes("mist")) return "fog-bg";
    if (weather.aqi > 3) return "smog-bg";
    
    return "default-bg";
  };

  // Get AQI status and color
  const getAQIStatus = () => {
    if (!weather) return { text: "Unknown", color: "secondary" };
    
    const { aqi } = weather;
    
    if (aqi <= 1) return { text: "Good", color: "success" };
    if (aqi <= 2) return { text: "Moderate", color: "info" };
    if (aqi <= 3) return { text: "Fair", color: "warning" };
    if (aqi <= 4) return { text: "Poor", color: "danger" };
    return { text: "Very Poor", color: "dark" };
  };

  const aqiStatus = getAQIStatus();

  return (
    <div className={`app-wrapper ${getBackgroundClass()}`}>
      <Header/>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card className="shadow-lg weather-card">
              <Card.Header className="bg-primary text-white">
                <h2 className="mb-0 text-center">Weather Dashboard</h2>
              </Card.Header>
              
              <Card.Body>
                <Form onSubmit={fetchWeather} className="mb-4">
                  <Row className="align-items-center">
                    <Col xs={12} md={8} className="mb-2 mb-md-0">
                      <Form.Control
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        className="form-control-lg"
                      />
                    </Col>
                    <Col xs={12} md={4}>
                      <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-100 btn-lg" 
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              className="me-2"
                            />
                            Searching...
                          </>
                        ) : (
                          <>
                            <FaSearch className="me-2" /> Search
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>

                {weather && (
                  <Row className="weather-content">
                    <Col md={5} className="text-center mb-4 mb-md-0">
                      <div className="weather-icon-container mb-3">
                        {getWeatherIcon()}
                      </div>
                      <h3 className="city-name">{weather.city}</h3>
                      <p className="country-name text-muted">{weather.country}</p>
                      <h2 className="temperature display-4">
                        {weather.temperature}°C
                      </h2>
                      <p className="weather-description lead">{weather.description}</p>
                    </Col>
                    
                    <Col md={7}>
                      <Card className="detail-card mb-3">
                        <Card.Body>
                          <h4 className="detail-heading mb-3">Weather Details</h4>
                          
                          <Row className="weather-details">
                            <Col xs={6} className="mb-3">
                              <div className="detail-item">
                                <FaTemperatureHigh className="detail-icon text-danger" />
                                <div>
                                  <p className="detail-label">Temperature</p>
                                  <p className="detail-value">{weather.temperature}°C</p>
                                </div>
                              </div>
                            </Col>
                            
                            <Col xs={6} className="mb-3">
                              <div className="detail-item">
                                <FaWater className="detail-icon text-primary" />
                                <div>
                                  <p className="detail-label">Humidity</p>
                                  <p className="detail-value">{weather.humidity}%</p>
                                </div>
                              </div>
                            </Col>
                            
                            <Col xs={6} className="mb-3">
                              <div className="detail-item">
                                <FaCloud className="detail-icon text-secondary" />
                                <div>
                                  <p className="detail-label">Weather</p>
                                  <p className="detail-value">{weather.description}</p>
                                </div>
                              </div>
                            </Col>
                            
                            <Col xs={6}>
                              <div className="detail-item">
                                <FaSmog className="detail-icon text-dark" />
                                <div>
                                  <p className="detail-label">Air Quality</p>
                                  <p className="detail-value">
                                    <span className={`badge bg-${aqiStatus.color} me-2`}>
                                      {aqiStatus.text}
                                    </span>
                                    AQI: {weather.aqi}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                )}
                
                {!weather && !loading && (
                  <div className="text-center welcome-message">
                    <FaCloudSun className="welcome-icon text-primary" />
                    <h3 className="mt-3">Welcome to Weather Dashboard</h3>
                    <p className="text-muted">Enter a city name to get the current weather information</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
