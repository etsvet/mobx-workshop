import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { storeContext } from '../App';
import './Weather.css';

import { App } from '../stores';


 export const WeatherComponent = observer(() => {
  let store = React.useContext(storeContext);
  
  let weatherStore = store.temperature;
  let input = '';
  
  function changeInput(newInput: string) {
    input = newInput;
  }

  function submitInfo(e: any) {
    // weatherStore.location = input;
    // input = '';
    weatherStore.isLoading = !weatherStore.isLoading;
  }

  return (
    <div className="weather-container">
      <label htmlFor="cityName">Enter the city name here:</label>
      <input
        type="text"
        id="cityName"
        onChange={(e) => changeInput(e.target.value)}
      />
      <Button variant="primary" className="my-3" onClick={submitInfo}>
        {weatherStore.isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          ''
        )}
        &nbsp; Get Weather Data
      </Button>
      <h2 className="my-3 text-primary">{weatherStore.location} </h2>
      <div className="my-3 temperature-container">
        <p>
          <span id="temperatureC">{weatherStore.temperature}</span>˚C
        </p>
        <p>
          <span id="temperatureF">{weatherStore.temperatureF}</span>˚F
        </p>
      </div>
      <p>{weatherStore.description}</p>
    </div>
  );
});
