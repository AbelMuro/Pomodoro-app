import React, {useState} from 'react';
import styles from './styles.module.css';

function InputMinutes(){
    const [minutes, setMinutes] = useState(0)

    return(
        <fieldset className={styles.selectMinutes}>
            <label>
                pomodoro
            </label>
            <input type='number' value={minutes}/>
            <div className={styles.arrowUp}></div>
            <div className={styles.arrowDown}></div>
        </fieldset>
    )
}

export default InputMinutes;