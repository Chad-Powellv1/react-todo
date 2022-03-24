import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

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

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func,        
}