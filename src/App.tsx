import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAction } from './state/actions/weatherActions';
import WeatherOnDay from './components/WeatherOnDay/WeatherOnDay';
import { Form, Formik, Field } from 'formik';
import Loader from 'react-loader-spinner';
import { PageTypes } from './state/actions/weatherTypes';

import './App.scss';
import { getLoading, getPage, getState } from './state/selectors/weatherSelectors';

const App = () => {
  const dispatch = useDispatch();
  const weather: any = useSelector(getState);
  const loading: boolean = useSelector(getLoading);
  const page: number = useSelector(getPage);

  console.log(weather);

  const perDay = Array.from(
    new Set(weather.list?.length && weather.list.map((el: any) => el.dt_txt.split(' ')[0]))
  );

  const [city, setCity] = useState<string>('Lviv');

  useEffect(() => {
    dispatch(getWeatherAction());
  }, [dispatch]);

  return (
    <div className='container-fluid px-3 pb-4 pt-2'>
      {loading ? (
        <div className='loader'>
          <Loader type='BallTriangle' color='#212529' height={80} width={80} />
        </div>
      ) : (
        weather.list && (
          <>
            <Formik
              initialValues={{ city: '' }}
              onSubmit={() => {
                dispatch(getWeatherAction(city));
                setCity('');
              }}
            >
              <Form>
                <div className='input-group mb-3'>
                  <Field
                    name='search'
                    className='form-control'
                    placeholder='Enter Your city'
                    value={city}
                    onChange={(e: any) => setCity(e.target.value)}
                  />

                  <button className='btn btn-dark'>Weather</button>
                </div>
              </Form>
            </Formik>
            <table className='table table-dark'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>
                    {weather.city?.name}&nbsp;{weather.city?.country}&nbsp; <br />
                    {perDay[page]} <br />
                  </th>
                  <th scope='col'>Temperature</th>
                  <th scope='col'>Humidity</th>
                  <th scope='col'>Pressure</th>
                  <th scope='col'>Wind</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Icon</th>
                </tr>
              </thead>
              <tbody>
                {weather.list
                  ?.filter((el: any) => el.dt_txt.split(' ')[0] === perDay[page])
                  .map((day: any, idx: number) => (
                    <tr key={idx}>{<WeatherOnDay city={weather} day={day} />}</tr>
                  ))}
              </tbody>
            </table>
            <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
              {' '}
              <button
                className='btn btn-secondary btn-sm me-md-2'
                onClick={() => dispatch({ type: PageTypes.PREV_PAGE })}
                disabled={page === 0 ? true : false}
              >
                prev
              </button>
              <button
                className='btn btn-secondary btn-sm'
                onClick={() => dispatch({ type: PageTypes.NEXT_PAGE })}
                disabled={page === perDay.length - 1 ? true : false}
              >
                next
              </button>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default App;
