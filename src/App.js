import { Form } from './components/Form';
import { Todo } from './components/TodoList';
import React, {useState} from 'react';
import './App.css';

export const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <Form todos={todos} setTodos={setTodos} setInput={setInput} />
      <Todo setTodos={setTodos} />
    </div>
  );
}