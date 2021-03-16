import React from 'react';

const Button = ({buttonDisplayName, clickHandler}) =>{
    return(
        <button onClick={clickHandler} id='new-quote'>{buttonDisplayName}</button>
    )
};

export default Button;