import { BiCheck, BiTrash } from 'react-icons/bi';
import React from "react";
import '../App.css';

export const Todo = ( {text, todos, setTodos, todo} ) => {

   

    const deleteHandler = (setTodos) => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

   return (
        <div className={todo.completed ? 'todo complete' : 'todo'}>
            <li style={{display: 'flex', justifyContent:'space-between'}}  >
            {<BiCheck onClick={completeHandler} />}
            {text}
            {<BiTrash onClick={deleteHandler} />}</li> 
        </div>
    )
};