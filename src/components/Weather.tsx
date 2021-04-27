import { observable, toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Button, Spinner, ButtonGroup } from 'react-bootstrap';
import { storeContext } from '../App';
import { LocationList } from './LocationList';
import './Weather.css';

export const WeatherComponent = observer(() => {
  const store = React.useContext(storeContext);

  const weatherStore = store.temperature;
  const UIStore = store.ui;

  function changeInput(newInput: string) {
    UIStore.locationInput = newInput;
  }

  return (
      <div className="weather-container">
        <label htmlFor="cityName">Enter the city name here:</label>
        <input
            type="text"
            id="cityName"
            autoComplete="off"
            onChange={(e) => changeInput(e.target.value)}
            value={UIStore.locationInput}
        />
        { store.ui.locationFetchError && <span className={'error-msg'}> {store.ui.locationFetchError} </span> }
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


        { weatherStore.weatherData.length > 1 &&
          <LocationList locations={weatherStore.weatherData.slice(1)} />
        }
      </div>
  );
});
