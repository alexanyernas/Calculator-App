import React from 'react';
import Screen from './Screen';
import Button from './Button';

const Calculator = () => {

    const values = [
        7, 8, 9, 'Del', 'AC',
        4, 5, 6, '+', '/',
        1, 2, 3, '+', '-',
        0, '.' , 'EXP' , 'Ans' , '=',
    ];

    return (
        <div className="container">
            
            <Screen /> 
            
            {
                values.map(value => (
                    <Button key={values.indexOf(value)} value={value} />
                ))
            }

        </div>
    )
}

export default Calculator;