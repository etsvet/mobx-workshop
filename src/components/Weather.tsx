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
      <Button variant="primary" className="my-3" onClick={weatherStore.handleSubmit}>
        { weatherStore.isLoading ? 
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> : '' }
        &nbsp; Get Weather Data
      </Button>
      <h2 className="my-3 text-primary">{weatherStore.weatherData[0].location} </h2>
      <div className="my-3 temperature-container">
        <p>
          <span id="temperatureC">{weatherStore.weatherData[0].temperature}</span>˚C
        </p>
        <p>
          <span id="temperatureF">{weatherStore.temperatureF}</span>˚F
        </p>
      </div>
      <p>{weatherStore.weatherData[0].description}</p>
      <div className="list-container">
        {
          weatherStore.weatherData ? weatherStore.weatherData.map(data => {
            <p className="list-paragraph">
              {data.location}
              {data.temperature}
              {data.description}
            </p> }) : ''
        }
      </div>
    </div>
  );
});
