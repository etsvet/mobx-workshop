import React from 'react';

import {TodoList} from '../components/TodoList';


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
      <div>
        <TodoList todos={fakeTodos as any}/>
      </div>
  )
}
