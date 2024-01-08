import React, {useState} from 'react';
import InputColor from './InputColor';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

function SelectColor() {
    const theme = useSelector(state => state.theme);    
    const [color, setColor] = useState(theme);

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    return(
        <fieldset className={styles.selectColor}>
            <label>
                Color
            </label>
            <div className={styles.colors}>
                <InputColor selected={color === '#F87070'} color='#F87070' handleColor={handleColor}/>    
                <InputColor selected={color === '#70F3F8'} color='#70F3F8' handleColor={handleColor}/>   
                <InputColor selected={color === '#D881F8'} color='#D881F8' handleColor={handleColor}/>           
            </div>
        </fieldset>
    )
}

export default SelectColor;