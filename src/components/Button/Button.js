import React from 'react';
import './Button.css';

const Button = ({ text, isClickButton, handleClick }) => {
    return ( 
        <button 
            className={isClickButton ? 'click-button' : 'reset-button'}
            onClick={handleClick}>
            {text}
        </button>
    );
}
 
export default Button;