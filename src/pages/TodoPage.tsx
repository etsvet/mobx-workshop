import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import {TodoList} from '../components/TodoList';
import './TodoPage.css';

const fakeTodos = {
  list: [
    {
      id: 1,
      text: 'Dishes',
      completed: false,
      tags: ['Urgent', 'Danger']
    }, {
      id: 2,
      text: 'Bilss',
      completed: true,
      tags: ['#dark']
    }

  ]
}

export const TodoPage = () => {
  return (
      <div className="todo-page">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add todo..."
          />
          <InputGroup.Append>
            <Button variant="primary">Add</Button>
          </InputGroup.Append>
        </InputGroup>
        <TodoList todos={fakeTodos as any}/>
      </div>
  )
}
