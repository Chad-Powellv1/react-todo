import { BiCheck, BiTrash } from 'react-icons/bi';
import React from "react";
import './todo.css';

export const Todo = ( {text} ) => {


    return (
        <div className="todo">
            <li className="clicked" style={{display: 'flex', justifyContent:'space-between'}} >{<BiCheck/>}{text}{<BiTrash />}</li> 
        </div>
    )
};