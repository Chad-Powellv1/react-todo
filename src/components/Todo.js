import { BiCheck, BiTrash } from 'react-icons/bi';
import React from "react";
import './todo.css';

export const Todo = ( {text, handleComplete} ) => {

   return (
        <div className="todo">
            <li style={{display: 'flex', justifyContent:'space-between'}} >{<BiCheck onClick={handleComplete}/>}{text}{<BiTrash />}</li> 
        </div>
    )
};