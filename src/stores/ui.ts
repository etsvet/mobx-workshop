import { makeAutoObservable } from 'mobx';
import { computed, action, observable, makeObservable } from 'mobx';

export class UI {
  @observable input: string = '';

  constructor() {
    makeAutoObservable(this);
  }
}