import React, { useState } from 'react';
import { AddTodoForm } from './AddToForm';
import './App.css';
import { TodoList } from './TodoList';
import { TodoListItem } from './TodoListItem';
import { declareAction, declareAtom, map, createStore } from '@reatom/core'

const initialTodos: Todo[] = [
  {
    text: "do task",
    complete: true
  },

  {
    text: "do task faster",
    complete: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false};
    setTodos([...todos, newTodo]);
  }

  return (
    <ul className="App">
      <AddTodoForm addTodo = {addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </ul>
  );
}

export default App;
