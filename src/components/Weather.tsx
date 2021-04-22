import { observable, toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { storeContext } from '../App';
import './Weather.css';

export const WeatherComponent = observer(() => {
  let store = React.useContext(storeContext);

  let weatherStore = store.temperature;
  let UIStore = store.ui;

  function changeInput(newInput: string) {
    UIStore.input = newInput;
  }

  return (
    <div className="weather-container">
      <label htmlFor="cityName">Enter the city name here:</label>
      <input
        type="text"
        id="cityName"
        autoComplete="off"
        onChange={(e) => changeInput(e.target.value)}
        value={UIStore.input}
      />
      <Button
        variant="primary"
        className="my-3"
        onClick={weatherStore.handleSubmit}
      >
        {weatherStore.isLoading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        &nbsp; Get Weather Data
      </Button>
      <h2 className="my-3 text-primary">
        {weatherStore.weatherData[0].location}{' '}
      </h2>
      <h3 className="text-info">{weatherStore.weatherData[0].description}</h3>
      <div className="temperature-container mb-3">
        <p>
          <span id="temperatureC">{weatherStore.weatherData[0].temperature}</span>˚C 
        </p>
        <p>
          <span id="temperatureF">{weatherStore.temperatureF}</span>˚F
        </p>
      </div>
      <section className={weatherStore.weatherData.length > 1 ? 'locations' : ''}>
        {weatherStore.weatherData.length > 1 &&
          weatherStore.weatherData.slice(1).map((entry) => (
            <ul className="locations__list">
              <li className="locations__item" key={entry.location}>
              <span>{entry.location} </span>
              <span>{entry.temperature}  ˚C</span>
              <span>{entry.description} </span>
              </li>
            </ul>
          ))}
      </section>
    </div>
  );
});
