import React from 'react';

const WeatherOnDay = ({ city, day }: any) => {
  return (
    <>
      <th scope='row'>
        <div>Time: {day.dt_txt.split(' ')[1].slice(0, -3)}</div>
      </th>
      <td>{parseInt(day.main.temp) - 273}&deg;С</td>
      <td>{day.main.humidity}%</td>
      <td>{day.main.pressure}</td>
      <td>
        {day.wind.deg}, speed: {day.wind.speed}
      </td>
      <td>{day.weather[0].description}</td>
    </>
  );
};

export default WeatherOnDay;
