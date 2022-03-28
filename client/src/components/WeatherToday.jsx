import styled from "styled-components";

export const WeatherToday = ({ city, weather }) => {
  const dateDay = new Date(weather[0].created).toLocaleString("en-En", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const tempNow = Math.floor(weather[0].the_temp);
  const weatherToday = weather[0].weather_state_name;
  const weatherIcon = weather[0].weather_state_abbr;

  return (
    <WeatherdayItem>
      <City>{city.title}</City>
      <h3> {dateDay}</h3>
      <WeatherInfo>
        <WeatherNow>
          {weatherToday}
          <TempNow>{tempNow}°C</TempNow>
        </WeatherNow>
        <WeatherIcon src={`/icon/${weatherIcon}.svg`} />
      </WeatherInfo>
    </WeatherdayItem>
  );
};

const WeatherdayItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  background: #ffffff;
  border-radius: 20px;
  margin-top: 30px;
  padding: 20px;
  width: 20%;
  user-select: none;
`;
const WeatherInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
`;
const WeatherIcon = styled.img`
  width: 90px;
  height: 90px;
`;
const City = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  border-bottom: solid 1px;
`;
const WeatherNow = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;
const TempNow = styled.div`
  font-size: 40px;
`;
