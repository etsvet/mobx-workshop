import React from "react";
import {observer} from "mobx-react";
import {Button, ButtonGroup} from "react-bootstrap";

import type {LocationWeatherData} from '../stores/locationWeatherData';
import {TemperatureScale} from '../stores/types';
import {WeatherLocation} from "./WeatherLocation";
import {storeContext} from '../App';


interface LocationListProps {
  locations: LocationWeatherData[];
}

export const LocationList = observer(({ locations }: LocationListProps) => {
  const app = React.useContext(storeContext);
  const globalMode = app.temperature.globalMode;

  return (
      <div className="locations-container">
        <ButtonGroup className="global-temp-mode" size="lg">
          <Button
              variant={globalMode === TemperatureScale.F ? 'primary' : 'secondary' }
              onClick={() => app.temperature.setGlobalScale(TemperatureScale.F)}
          >
            F
          </Button>
          <Button
              variant={globalMode === TemperatureScale.C ? 'primary' : 'secondary' }
              onClick={() => app.temperature.setGlobalScale(TemperatureScale.C)}
          >
            C
          </Button>
        </ButtonGroup>
        <section className='locations'>
          <ul className="locations__list">
            {locations.map((entry) => <WeatherLocation key={entry.location} data={entry}/>)}
          </ul>
        </section>
      </div>
  )
})
