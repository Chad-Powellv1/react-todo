import React from "react";
import './todo.css'

export const Todo = ( {text} ) => {

    return (
        <div className="todo">
            <li className="clicked">{text}</li> 
        </div>
    )
}