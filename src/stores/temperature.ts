import { makeAutoObservable, toJS } from 'mobx';
import { computed, action, observable, makeObservable } from 'mobx';
import { AppStore } from './index';

const API_KEY = '3c2f7ac196cb4e2195ec564b5a6000eb';

export class Temperature {
  @observable isLoading = false;
  @observable searchQuery = '';

  @observable weatherData:{temperature:number, location:string, description:string}[] = [
    {
      temperature: 33,
      location: 'Amsterdam, NL',
      description: 'clear sky',
    }
  ];

  constructor(public parentStore: typeof AppStore) {
    makeAutoObservable(this);
  }

  @computed get temperatureF() {
    return (this.weatherData[0].temperature * 9) / 5 + 32;
  }

  getWeatherData() {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.searchQuery}&appid=${API_KEY}`;

    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(URL, requestOptions)
      .then((res) => res.json())
      .then((json) => this.setResponceData(json))
      .catch((err) => console.log(err));
  }

  @action setResponceData = (json: any) => {
    // this.weatherData.unshift();

    let newItem = {
      temperature: Number((json.main.temp - 273.15).toFixed()),
      location: json.name,
      description: json.weather[0].description,
    }

    this.weatherData = [newItem, ...this.weatherData];
    this.isLoading = false;

    // this.weatherData.forEach(el => console.log(toJS(el)));
  };

  @action updateState() {
    this.isLoading = true;
    this.searchQuery = this.parentStore.ui.input;
    this.parentStore.ui.input = '';
  }

  handleSubmit = () => {
    this.updateState();
    this.getWeatherData();
  };
}
