import { TodoList } from './todo';
import { Temperature } from './temperature';
import { UI } from './ui';

export * from './temperature';
export * from './todo';
export * from './ui';


export class App {
    public todos = new TodoList();
    public temperature = new Temperature(this);
    public ui = new UI();
}

export const AppStore = new App();


(window as any).store = AppStore;
