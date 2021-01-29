import React from 'react';
import Screen from './Screen';
import Button from './Button';
import { values } from '../data/values';
import '../styles/Calculator.css';
import '../styles/Footer.css';
import Footer from './Footer';

const Calculator = () => {

    return (
        <>
            <div className="container">
                <div className="container_screen">
                    <Screen />
                </div>

                <div className="container_buttons"> 
                    {
                        values.map(value => (
                            <Button 
                                key= { value } 
                                value={ value } 
                            />
                        ))
                    }
                </div>

            </div>

            <div className="container_footer">
                <Footer />
            </div>
        </>
    )
}

export default Calculator;