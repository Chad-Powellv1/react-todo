import { TodoList } from './components/TodoList';
import { Button } from './components/Button';
import { Form } from './components/Form';
import React, {useState} from 'react';
import './App.css';

export const App = () => {
  const [inputText , setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos} />
        <div className='button'>
          <Button text='All'  /><Button text="Active" /><Button text='Completed' />
        </div>
    </div>
  );
}