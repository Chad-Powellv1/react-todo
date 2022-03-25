import React from "react";


export const Button = ( {color, text, onClick} ) => {
 
  return (

    <button 
    onClick={onClick}
    style={{backgroundColor: color}}
    className='button'>
    {text}
    </button>

  )
}

Button.defaultProps = {
    color: "rgba(255, 255, 255, 0.2)",

}

