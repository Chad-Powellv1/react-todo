import React from "react";

export const Button = ( {color, name, setFilter} ) => {
 
  return (
    <button 
    type='button'
    onClick={() => setFilter(name)}
    style={{backgroundColor: color}}
    className='button'>
    {name}
    </button>
  )
}

Button.defaultProps = {
    color: "rgba(255, 255, 255, 0.2)",
}