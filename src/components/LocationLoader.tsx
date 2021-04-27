import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import {Button, Spinner} from "react-bootstrap";
import {storeContext} from "../App";


export const LocationLoader = observer(() => {
  const store = useContext(storeContext);

  return (
    <div className="location-loader-container">
      <label htmlFor="cityName">Enter the city name here:</label>
      <input
          type="text"
          id="cityName"
          autoComplete="off"
          onChange={(e) => store.ui.handleInputChange(e.target.value)}
          value={store.ui.locationInput}
      />
      { store.ui.locationFetchError && <span className={'error-msg'}> {store.ui.locationFetchError} </span> }
      <Button
          variant="primary"
          className="my-3"
          onClick={store.temperature.handleSubmit}
      >
        {store.temperature.isLoading && (
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
        {store.temperature.weatherData[0].location}{' '}
      </h2>
      <h3 className="text-info">{store.temperature.weatherData[0].description}</h3>
      <div className="temperature-container mb-3">
        <p>
          <span id="temperatureC">{store.temperature.weatherData[0].temperature}</span>˚C
        </p>
        <p>
          <span id="temperatureF">{store.temperature.weatherData[0].tempInF}</span>˚F
        </p>
      </div>
    </div>
  )
})
