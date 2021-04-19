import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Todo.css';

import { Todo as TodoStore } from '../stores';

const BASE_CLASS = "todo-item"

export const Todo = ({ todoData }: { todoData: TodoStore }) => {

  return (
      <Card className={BASE_CLASS}>
        <span className={`${BASE_CLASS}__todo-text`}>dsadasdsssssssssssssssssssssssssssssssssssssssssssssssssssssa</span>
        <Button variant="danger" className="close-btn">X</Button>
      </Card>
  )
}

