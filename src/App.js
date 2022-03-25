import { TodoList } from './components/TodoList';
import { Button } from './components/Button';
import { Form } from './components/Form';
import React, { useState, useEffect } from 'react';
import './App.css';


export const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('task')))
  }, [])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(todos));
  }, [todos])


  let amount = todos.filter((todo) => todo.completed === false).length;

  return (
    <div className="app">
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos} />
        <div className='button'>
         <Button text='All'  /><Button text="Active" /><Button text='Completed' />
        </div>
        <div>
        <h5 className='remaining'>{`${amount} items left`}</h5>
        </div>
    </div>
  );
}