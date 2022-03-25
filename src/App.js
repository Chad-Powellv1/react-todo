import React, { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { Button } from './components/Button';
import { Form } from './components/Form';
import './App.css';

export const App = () => {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('All');

	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem('task')));
	}, []);

	useEffect(() => {
		localStorage.setItem('task', JSON.stringify(todos));
	}, [todos]);

	const BUTTON_MAP = {
		All: () => true,
		Active: todo => !todo.completed,
		Completed: todo => todo.completed,
	};

	const BUTTON_NAMES = Object.keys(BUTTON_MAP);
	const buttonList = BUTTON_NAMES.map(name => (
		<Button
			key={name}
			name={name}
			isPressed={name === filter}
			setFilter={setFilter}
		/>
	));

	let amount = todos.filter(todo => todo.completed === false).length;

	return (
		<div className='app'>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
			/>
			<TodoList todos={todos} setTodos={setTodos} setFilter={setFilter} />
			<div className='button'>{buttonList}</div>
			<div>
				<h5 className='remaining'>{`${amount} items left`}</h5>
			</div>
		</div>
	);
};
