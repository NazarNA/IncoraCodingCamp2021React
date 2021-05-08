import React from 'react';

import './WeatherOnDay.scss';

const WeatherOnDay = ({ day }: any) => {
  return (
    <>
      <th scope='row'>
        <div>Time: {day.dt_txt.split(' ')[1].slice(0, -3)}</div>
      </th>
      <td>
        <div>{parseInt(day.main.temp) - 273}&deg;С</div>
      </td>
      <td>{day.main.humidity}%</td>
      <td>{day.main.pressure} hPa</td>
      <td>{day.wind.speed} m\s</td>
      <td>{day.weather[0].description.toUpperCase()}</td>
      <td>
        <img
          className='mx-auto d-block'
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
          alt='weatehr_icon'
        />
      </td>
    </>
  );
};

export default WeatherOnDay;
