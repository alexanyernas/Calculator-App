import React, { useState } from 'react';
import Screen from './Screen';
import Button from './Button';
import { values } from '../data/values';
import { test } from '../helpers/validOperation';
import '../styles/Calculator.css';
import '../styles/Footer.css';
import Footer from './Footer';

const Calculator = () => {

    const [ value, setValue ] = useState('');

    const handleClickValue = (e) => {

        switch ( e.target.innerText ) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '+':
            case '-':
            case '*':
            case '/':
                setValue( value + e.target.innerText );
                break;
            case 'AC':
                setValue('');
                break;
            case 'Del':
                setValue( value.slice(0, value.length - 1 ));
                break;
            case '=':
                if ( test(value) ) {
                    setValue( eval(value) );
                } else {
                    setValue('SYNTAX ERROR');
                }
                break;
            default:   
        }
    }

    return (
        <>
            <div className="container">
                <div className="container_screen">
                    <Screen 
                        value= { value }
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