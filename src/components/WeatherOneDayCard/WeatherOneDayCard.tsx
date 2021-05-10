import React from 'react';

import './WeatherOneDayCard.scss';

const WeatherOneDayCard = ({ day }: any) => (
  <div className='card'>
    <img
      className=''
      src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
      alt='weatehr_icon'
    />
    <div className='card-body'>
      <h5 className='card-title'>{day.weather[0].description.toUpperCase()}</h5>
      <p className='card-text'>{parseInt(day.main.temp) - 273}&deg;С</p>
      <p className='card-text'>{day.main.humidity}%</p>
      <p className='card-text'>{day.main.pressure} hPa</p>
      <p className='card-text'>{day.wind.speed} m\s</p>
      <p className='card-text'>{day.weather[0].description.toUpperCase()}</p>
    </div>
    <div className='card-footer'>
      <small className='text-muted'>Time: {day.dt_txt.split(' ')[1].slice(0, -3)}</small>
    </div>
  </div>
);

export default WeatherOneDayCard;
