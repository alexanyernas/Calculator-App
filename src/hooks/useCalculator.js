import { useState } from 'react';
import { test } from '../helpers/validOperation';

export const useCalculator = () => {

    const [ ans, setAns ] = useState(0); 
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
            case '.':
                setValue( value + e.target.innerText );
                break;

            case 'AC':
                setValue('');
                break;

            case 'Del':
                setValue( value.slice(0, value.length - 1 ));
                break;

            case 'Ans':
                setValue( value + ans );
                break;

            case '=':
                if ( test(value) ) {  
                    // eslint-disable-next-line no-eval
                    let result = eval(value).toString();
                    setValue( result );
                    setAns( result );
                }
                break;

            default:   
        }
    }

    return {
        value,
        handleClickValue
    }
}