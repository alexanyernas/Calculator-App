import React from 'react';
import '../styles/Button.css';

const Button = ( { value, onClick } ) => {

    return (
        <>
            <button 
                value="value"
                className="btn"
                onClick= { onClick }
            >
                { value }
            </button>  
        </>
    )
}

export default Button;