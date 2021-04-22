import { makeAutoObservable } from 'mobx';
import { computed, action, observable, makeObservable } from 'mobx';
import { AppStore } from './index';

const API_KEY = '3c2f7ac196cb4e2195ec564b5a6000eb';

export class Temperature {
  @observable temperature: number = 33;
  @observable location = 'Amsterdam, NL';
  @observable isLoading = false;
  @observable description = 'clear sky';

  constructor(public parentStore: typeof AppStore) {
    makeAutoObservable(this);
  }

  @computed get temperatureF() {
    return (this.temperature * 9) / 5 + 32;
  }

  getWeatherData() {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${API_KEY}`;

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
    this.temperature = Number((json.main.temp - 273.15).toFixed()); //responce is in Kelvin
    this.description = json.weather[0].description;
    this.isLoading = false;
  };

  @action updateState() {
    this.isLoading = true;
    this.location = this.parentStore.ui.input;
    this.parentStore.ui.input = '';
  }

  handleSubmit = () => {
    this.updateState();
    this.getWeatherData();
  };
}
