import React, {useEffect, useState, useRef} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {motion} from 'framer-motion';

function SelectTime() {
    const [select, setSelect] = useState('pomodoro');
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const allButtons = useRef();

    const handleSelect = (e) => {
        if(!e.target.matches('button')) return

        const selected = e.target.getAttribute('data-id');
        setSelect(selected);
        dispatch({type: `SELECT_${selected.toUpperCase()}`})
    }

    useEffect(() => {
        const buttons = allButtons.current.children;
        Array.from(buttons).forEach((button) => {
            button.style.color = '';
        })

        Array.from(buttons).forEach((button) => {
            if(button.getAttribute('data-id') === select)
                button.style.color = '#1E213F'      
        })
    }, [select, theme])

    return(
        <div className={styles.select} onClick={handleSelect} ref={allButtons}>
            <button className={styles.select_time} data-id='pomodoro'>
                pomodoro
            </button>
            <button className={styles.select_time} data-id='short'>
                short break
            </button>
            <button className={styles.select_time} data-id='long'>
                long break
            </button>
            {select === 'pomodoro' && <motion.div layoutId='select' className={styles.selectPomodoro} style={{backgroundColor: theme}}/>}
            {select === 'short' && <motion.div layoutId='select' className={styles.selectShort} style={{backgroundColor: theme}}/>}
            {select === 'long' && <motion.div layoutId='select' className={styles.selectLong} style={{backgroundColor: theme}}/>}                
        </div>
    )
}

export default SelectTime;