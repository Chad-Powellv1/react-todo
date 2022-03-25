import { Todo } from "./Todo";
import React from 'react';

export const TodoList = ({ todos, setTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos.map((todo) => (
                   <Todo key={todo.id} todos={todos} todo={todo} text={todo.text} setTodos={setTodos} />
               ))}
            </ul>
        </div>
    )
}