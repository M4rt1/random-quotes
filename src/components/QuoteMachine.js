import { Typography } from '@material-ui/core';
import React from 'react';
import Button from './Button';
import '../styles/QuoteMachine.css';

const QuoteMachine = (props) =>{
    return(
        <>
        {
            props.selectedQuote?
            (
            <Typography >
                <p id='text'>"{props.selectedQuote.quote}"</p> - <p id='author'>{props.selectedQuote.author}</p>
            </Typography>
            ): 
            null
        }
            <Button buttonDisplayName='Next Quote' clickHandler={props.assignNewQuoteIndex}/>
        </>
    )
};

export default QuoteMachine;