import { Todo } from "./Todo";
import React from 'react';

export const TodoList = ({ todos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos.map((todo) => (
                   <Todo key={todo.id} text={todo.text} />
               ))}
            </ul>
        </div>
    )
}