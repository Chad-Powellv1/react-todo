
import { BiPlusMedical } from 'react-icons/bi'
import React from 'react';
import './form.css'


export const Form = ({ setInputText, setTodos,todos, inputText }) => {
	

    const handleInputText = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        
        setTodos([
            ...todos,
             {
                 text: inputText,
                 completed: false,
                 id: Date.now()
            },
            
        ]);
        // set state back to empty input field
        setInputText('');
    };

    const handleComplete = (id) => {
        let updateTodo = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodo)
    }

    const handleDelete = (e) => {

    }

	return (
        <>
			<h2 className= 'title'>To-Do List</h2>
            <form className='form'>
			    <input
                    type='text'
                    id='myInput'
                    placeholder='What do you need done?'
                    value={inputText}
                    className='todo-input'
                    onChange={handleInputText}
			    />
                <button className='addBtn' onClick={handleInputSubmit}><BiPlusMedical /></button>
                </form>
        </>
	);
};
