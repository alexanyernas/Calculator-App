import React from 'react';
import './Button.css';

const Button = ( { value } ) => {

    return (
        <>
            <button 
                value="value"
                className="btn"
            >
                { value }
            </button>  
        </>
    )
}

export default Button;