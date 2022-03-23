import React, { useState, useEffect } from "react";
import { Form } from "./Form";



export const Todo = () => {
    const [todos, setTodos] = useState([]);
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                
            </ul>
        </div>
    )
}