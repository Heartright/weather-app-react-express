import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherForm } from "./components/WeatherForm";
import { WeatherForecast } from "./components/WeatherForecast";
import styled, { createGlobalStyle } from "styled-components";

export const WeatherApp = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    };
    getLocation();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/${lat},${long}`
      );
      const dateweather = response.data;
      setWeather(dateweather.consolidated_weather);
      setCity(response.date);
      console.log(dateweather);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <WeatherWrapper>
      <WeatherForm fetchWeather={fetchWeather} />
      <WeatherList>
        {weather.slice(1).map((forecast) => {
          return <WeatherForecast forecast={forecast} key={forecast.id} />;
        })}
      </WeatherList>
      <GlobalStyle />
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  min-height: 480px;
  text-align: center;
  margin: 40px auto;
  border-radius: 10px;
  padding: 20px 10px;
`;

const WeatherList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #132e4b;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
    li {
      font-size: 18px;
      list-style-type: none;
    } 
    h1{
      color: white;
    }
    h3 {
      margin: 0;
    }
`;
