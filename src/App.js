import React from 'react';
import { useSelector } from 'react-redux';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilterButtons from './components/VisibilityFilterButtons';

import { getActiveTodoCount } from './redux/selectors';

const todos = [
  {
    text: 'Eat lunch',
    completed: false,
    id: 1
  },
  {
    text: 'Research Redux',
    completed: true,
    id: 2
  },
  {
    text: 'Finish app',
    completed: false,
    id: 3
  }
];

function App() {
  // const activeTodoCount = todos.reduce(
  //   (count, todo) => todo.completed ? count : count + 1,
  //   0
  // );
  const activeTodoCount = useSelector(getActiveTodoCount);
  return (
    <div>
      <h1>Todos ({activeTodoCount} active)</h1>
      <VisibilityFilterButtons />
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
