import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import { values } from '../data/values';
import Screen from './Screen';
import Button from './Button';
import Footer from './Footer';
import '../styles/Calculator.css';

const Calculator = () => {

    const { value, handleClickValue } = useCalculator();
    
    return (
        <>
            <div className="container">
                <div className="container_screen">
                    <Screen 
                        value = { value }
                    />
                </div>

                <div className="container_buttons"> 
                    {
                        values.map(value => (
                            <Button 
                                key= { value } 
                                value= { value } 
                                onClick= { handleClickValue }
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