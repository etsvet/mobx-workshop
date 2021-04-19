import React from 'react';
import Badge from 'react-bootstrap/Badge'

import { Todo } from './Todo';
import { Todo as TodoStore, TodoList as TodoListStore } from '../stores';

import './TodoList.css';

export const TodoList = ({ todos }: { todos: TodoListStore }) => {
  return (
      <div className="todo-list-container">


        { todos.list.map(todo => <Todo key={todo.id} todoData={todo} />) }
        <div className="todo-list__count">
          {/* TODO: display todos count */}
          <span>Count:  </span>
          <Badge variant="secondary">??</Badge>
        </div>
      </div>
  )
}
