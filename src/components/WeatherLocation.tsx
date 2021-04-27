import React from 'react';
import {Button, ButtonGroup, Spinner} from "react-bootstrap";
import {observer} from 'mobx-react';

import {LocationWeatherData} from '../stores/locationWeatherData';
import {TemperatureScale} from '../stores/types';


export const WeatherLocation = observer(({ data }: { data: LocationWeatherData}) => {
  console.log('WeatherLocation rerenderd!')

  return (
      <li className="locations__item" key={data.location}>
        <span>{data.location} </span>
        <span>{data.displayScale === TemperatureScale.C ? data.temperature + " ˚C" : data.tempInF + " ˚F"} </span>
        {/*<span>{data.description} </span>*/}

        <div>
          <Button variant={data.isLoading ? 'secondary' : 'primary'} onClick={data.isLoading ? undefined : data.update}>
            {data.isLoading && (
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            )}
            Update
          </Button>

          <ButtonGroup className="location-temp-mode">
            <Button
                onClick={() => data.setDisplayScale(TemperatureScale.F)}
                variant={data.displayScale === TemperatureScale.F ? 'primary' : 'secondary'}
            >
              F
            </Button>
            <Button
                onClick={() => data.setDisplayScale(TemperatureScale.C)}
                variant={data.displayScale === TemperatureScale.C ? 'primary' : 'secondary'}
            >
              C
            </Button>
          </ButtonGroup>
        </div>
      </li>
  )
})
