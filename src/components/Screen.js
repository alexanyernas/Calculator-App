import React from 'react';
import '../styles/Screen.css';

const Screen = ({ value }) => {
    return (

        <input 
            className="screen" 
            type="text"
            value= { value }
            readOnly
        />
        
    )
}

export default Screen;