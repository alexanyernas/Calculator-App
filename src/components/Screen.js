import React from 'react';
import './Screen.css';

const Screen = () => {
    return (
        <div className="container_screen">
            <input 
                className="screen" 
                type="text" 
                readOnly
            />
        </div>
    )
}

export default Screen;