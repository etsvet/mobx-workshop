import {  } from 'mobx';


export class UI {
  locationInput: string = '';
  locationFetchError: string | null = null;

  handleInputChange = (value: string) => {
    this.locationInput = value;
  }

  constructor() {
    // you may need this:
    // makeAutoObservable(this);
  }
}
