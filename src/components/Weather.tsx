import { } from 'mobx-react';
import React from 'react';

import { storeContext } from '../App';

import { LocationList } from './LocationList';
import { LocationLoader } from './LocationLoader';

import './Weather.css';

export const WeatherComponent = () => {
  const store = React.useContext(storeContext);

  const weatherStore = store.temperature;

  return (
      <div className="weather-container">
        <LocationLoader />

        { weatherStore.weatherData.length > 1 &&
          <LocationList locations={weatherStore.weatherData.slice(1)} />
        }
      </div>
  );
};
