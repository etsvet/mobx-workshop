import { makeAutoObservable } from 'mobx';
import { computed, action, observable, makeObservable } from 'mobx';


export class UI {
  @observable locationInput: string = '';
  @observable locationFetchError: string | null = null;

  handleInputChange = (value: string) => {
    this.locationInput = value;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
