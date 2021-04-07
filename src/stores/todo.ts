import { computed, action, observable, makeObservable } from 'mobx';

export class TodoList {
  public list: Todo[] = [];

  addTodo = () => {
    // TODO: --- ?
  }

  deleteTodo = () => {
    // TODO: --- ?
  }
}

export class Todo {
  public id = Math.random();
  public text: string = '';
  public completed: boolean = false;
  public tags: string[] = [];

  addTags = (tags: string[]) => {

  }
}
