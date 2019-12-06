import React from 'react'
import './button.css';

function Button(props) {
  return (
    <button type="submit" className="button" > {props.name} </button>
  );
}

export default Button;
