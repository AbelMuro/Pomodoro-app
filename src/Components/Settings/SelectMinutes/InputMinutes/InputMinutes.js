import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';

function InputMinutes({label, initial}){
    const [minutes, setMinutes] = useState(initial);
    const inputRef = useRef();


    const increment = () => {
        setMinutes(prev => {
            if(prev + 1 > 60)
                return prev;
            else
                return prev + 1
        });
    }

    const decrement = () => {
        setMinutes(prev => {
            if(prev - 1 < 0)
                return prev;
            else
                return prev - 1;
        });
    }

    return(
        <fieldset className={styles.selectMinutes}>
            <label>
                {label}
            </label>
            <input type='number' value={minutes} ref={inputRef} onChange={() => {}}/>
            <div className={styles.arrowUp} onClick={increment}></div>
            <div className={styles.arrowDown} onClick={decrement}></div>
        </fieldset>
    )
}

export default InputMinutes;