import React, {useState} from 'react';
import InputColor from './InputColor';
import styles from './styles.module.css';

function SelectColor() {
    const [color, setColor] = useState('#F87070');

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    return(
        <fieldset className={styles.selectColor}>
            <h2>
                Color
            </h2>
            <div className={styles.colors}>
                <InputColor selected={color === '#F87070'} color='#F87070' handleColor={handleColor}/>    
                <InputColor selected={color === '#70F3F8'} color='#70F3F8' handleColor={handleColor}/>   
                <InputColor selected={color === '#D881F8'} color='#D881F8' handleColor={handleColor}/>           
            </div>
        </fieldset>
    )
}

export default SelectColor;