import { makeAutoObservable } from 'mobx';
import { computed, action, observable, makeObservable } from 'mobx';
const API_KEY = '3c2f7ac196cb4e2195ec564b5a6000eb';

export class Temperature {
  @observable temperature = 33;
  @observable location = 'Amsterdam, NL';
  @observable isLoading = false;
  @observable description = 'clear sky';

  @computed get temperatureF() {
    return (this.temperature * 9) / 5 + 32;
  }

  @action getWeatherData() {
    const URL = `api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${API_KEY}`;
    fetch(URL)
      .then((res) =>
        res.json().then(
          action((json: any) => {
            this.temperature = json.main.temp - 273.15; //responce is in Kelvin
            this.description = json.weather.description;
            this.isLoading = false;
          })
        )
      )
      .catch((err) => console.log(err));
  }
}