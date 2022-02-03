import React from "react";
import Button from '@mui/material/Button';

export const WeatherForm = ({ fetchWeather }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };

  return (
    <form onSubmit={handleSubmit}>
       <Button type="submit" size="medium" variant="contained">
        Get weather
      </Button>
    </form>
  );
};
