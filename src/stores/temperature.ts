import { makeAutoObservable, toJS } from 'mobx';
import { computed, action, observable, makeObservable } from 'mobx';
import { AppStore } from './index';

import { LocationWeatherData } from './locationWeatherData';
import { TemperatureScale } from './types';

const API_KEY = '3c2f7ac196cb4e2195ec564b5a6000eb';



export class Temperature {
  @observable isLoading = false;
  @observable searchQuery = '';

  @observable weatherData: LocationWeatherData[] = [
    new LocationWeatherData({
      temperature: 15,
      location: 'Berlin, DE',
      description: 'clear sky'
    }, this)
  ];

  constructor(public parentStore: typeof AppStore) {
    makeAutoObservable(this);
  }

  @action
  setGlobalScale(displayScale: TemperatureScale) {
    this.weatherData.forEach(data => {
      data.displayScale = displayScale
    });
  }

  @computed get globalMode(): TemperatureScale | undefined {
    if (this.weatherData.every(d => d.displayScale === TemperatureScale.C)) return TemperatureScale.C;

    if (this.weatherData.every(d => d.displayScale === TemperatureScale.F)) return TemperatureScale.F;

    return undefined;
  }

  @computed get temperatureF() {
    return (this.weatherData[0].temperature * 9) / 5 + 32;
  }

  async getWeatherData() {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.searchQuery}&appid=${API_KEY}`;

    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
    };

      const resp = await fetch(URL, requestOptions);
      if (resp.status < 300) {
        const json = await resp.json();
        this.setResponceData(json);
      } else {
        if (resp.status === 404) {
          this.handleResponseError('Location not found');
        }
      }
  }

  @action
  handleResponseError = (error: string) => {
    this.parentStore.ui.locationFetchError = error;
    this.isLoading = false;
  }

  @action setResponceData = (json: any) => {
    const location = json.name + ', ' + json.sys.country;

    const newData = new LocationWeatherData({
      temperature: Number((json.main.temp - 273.15).toFixed()),
      location,
      description: json.weather[0].description
    }, this)

    this.weatherData.unshift(newData);

    this.isLoading = false;
  };

  @action updateStateOnRequestStart() {
    this.parentStore.ui.locationFetchError = '';
    this.isLoading = true;
    this.searchQuery = this.parentStore.ui.locationInput;
    this.parentStore.ui.locationInput = '';
  }

  handleSubmit = () => {
    this.updateStateOnRequestStart();
    this.getWeatherData();
  };
}
