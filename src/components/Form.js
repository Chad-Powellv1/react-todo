import { useState, useEffect, useRef } from 'react';
import React from 'react';
import './form.css'

export const Form = ({ onSubmit }) => {
	const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 1492),
            text: input
        });
        setInput('');
    };

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }


	return (
		<form className='form' onSubmit={handleSubmit}>
			<h2 className= 'title'>To-Do List</h2>
			    <input
                    type='text'
                    id='myInput'
                    placeholder='What do you need done?'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
			    />
                <button className='addBtn'>Add</button>
		</form>
	);
};
