import React from "react";

export const Todo = ( {text} ) => {

    return (
        <div className="todo">
            <li>{text}</li> 
        </div>
    )
}