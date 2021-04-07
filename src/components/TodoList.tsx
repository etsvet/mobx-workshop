import React from 'react';

import { Todo } from './Todo';
import { Todo as TodoStore, TodoList as TodoListStore } from '../stores';

export const TodoList = ({ todos }: { todos: TodoListStore }) => {
  return (
      <div>
        <h2>Todos:</h2>
        { todos.list.map(todo => <Todo key={todo.id} todoData={todo} />) }
      </div>
  )
}
