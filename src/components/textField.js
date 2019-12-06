import React from 'react'
import './textField.css';

function TextField(props) {
  return (
    <input type="text" className={props.class} placeholder={props.placeholder} value={props.value} />
  );
}

export default TextField;
