import {  } from 'mobx';
import type { Temperature } from './temperature';
import { TemperatureScale } from "./types";

import { wait, getRandInRange } from '../utils'

export interface WeatherData {
  location: string,
  temperature: number,
  description: string
}

export class LocationWeatherData implements WeatherData {
  location: string;
  temperature: number;
  description: string;
  displayScale: TemperatureScale;
  isLoading: boolean = false;

  constructor(data: WeatherData, parent: Temperature) {
    // you may need this:
    // makeAutoObservable(this);
    this.location = data.location;
    this.temperature = data.temperature;
    this.description = data.description;
    this.displayScale = TemperatureScale.C;
  }

  public setDisplayScale = (displayScale: TemperatureScale) => this.displayScale = displayScale;

  get tempInF(): number {
    return parseFloat(((this.temperature * 9) / 5 + 32).toFixed(1));
  }

  private updateTemperature = (temp: number) => {
    this.temperature = temp;
    this.isLoading = false;
  }

  private startUpdate = () => {
    this.isLoading = true;
  }

  public update = async () => {
    this.startUpdate();

    await wait(getRandInRange(500, 2000));


    const newTemp = this.temperature + getRandInRange(-1.5, 1.5)

    this.updateTemperature(parseFloat(newTemp.toFixed(1)));
  }
}
