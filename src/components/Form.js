import { useState, useEffect, useRef } from 'react';
import React from 'react';
import './form.css'

export const Form = ({ input, setInput, todos, setTodos }) => {
	
    const handleInputText = (e) => {
        console.log(e.target.value)
        setInput(e.target.value);
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setInput(e.target.value);
        setTodos([
            ...todos,
             {
                 text: input,
                 completed: false,
                 id: Math.floor(Math.random()*1000)
            }
        ]);
        setInput('');
    };

	return (
        <>
			<h2 className= 'title'>To-Do List</h2>
            <form className='form'>
			    <input
                    type='text'
                    id='myInput'
                    placeholder='What do you need done?'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleInputText}
			    />
                <button className='addBtn' onClick={handleInputSubmit}>Add</button>
                </form>
        </>
	);
};
