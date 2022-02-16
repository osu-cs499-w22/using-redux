import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selectors';

function TodoList() {
  const todos = useSelector(getTodosByVisibilityFilter);
  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </div>
  )
}

export default TodoList;
