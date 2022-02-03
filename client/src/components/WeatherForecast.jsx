import React from "react";
import styled from "styled-components";

export const WeatherForecast = ({ forecast }) => {
  const maxTemp = Math.floor(forecast.max_temp);
  const minTemp = Math.floor(forecast.min_temp);
  const weatherDay = forecast.forecast;
  const windSpeed = Math.floor(forecast.wind_speed);
  const weatherIcon = forecast.weather_state_abbr;
  const date = forecast.applicable_date.split("-");
  const dateDay = date[2];
  const dateMouth = date[1];

  return (
    <WeatherItem>
      <WeatherDate>
        {dateDay}.{dateMouth}
      </WeatherDate>
      <WeatherDay>
        <ul>
          <li>{weatherDay}</li>
          <li>Max: {maxTemp}°C</li>
          <li>Min: {minTemp}°C</li>
          <li>{windSpeed} mph</li>
        </ul>
        <WeatherIcon src={`/icon/${weatherIcon}.svg`} />
      </WeatherDay>
    </WeatherItem>
  );
};

const WeatherDate = styled.div`
  font-size: 20px;
  font-weight: bold;
  border-bottom: solid 1px;
`;

const WeatherDay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const WeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px auto;
  background: #ffffff;
  padding: 10px;
  border-radius: 20px;
  width: 225px;
  user-select: none;
`;
const WeatherIcon = styled.img`
  width: 70px;
  height: 70px;
`;
