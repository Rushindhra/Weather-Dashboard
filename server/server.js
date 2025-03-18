const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());
app.get("/weather", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const API_KEY = process.env.WEATHER_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    res.json({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      aqi: Math.floor(Math.random() * 5) + 1, // Fake AQI since OpenWeather doesn't provide it
    });

  } catch (error) {
    console.error("Error fetching weather:", error.response?.data || error.message);
    res.status(500).json({ error: "City not found or API error!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
