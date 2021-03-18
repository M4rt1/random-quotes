import React from 'react';
import '../styles/Button.css';

const Button = ({buttonDisplayName, clickHandler}) =>{
    return(
        <button onClick={clickHandler} id='new-quote'>{buttonDisplayName}</button>
    )
};

export default Button;