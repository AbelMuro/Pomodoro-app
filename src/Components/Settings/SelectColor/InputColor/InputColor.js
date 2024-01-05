import React from 'react';
import styles from './styles.module.css';
import icons from './icons';

function InputColor({selected, color, handleColor}) {

    return(
        <label className={styles.color} htmlFor={color} style={{backgroundColor: color}}>
            {selected && <img src={icons['checkmark']}/>}
            <input 
                type='radio' 
                id={color} 
                name='color' 
                value={color} 
                checked={selected} 
                onChange={handleColor}/>
        </label>
    )
}

export default InputColor;