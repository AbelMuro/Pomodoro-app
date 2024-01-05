import React from 'react';
import InputMinutes from './InputMinutes';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function SelectMinutes(){
    const {pomodoro, short, long} = useSelector(state => state.time);


    return(
        <section className={styles.select}>
            <h1 className={styles.select_title}>
                {`Time (Minutes)`}
            </h1>
            <InputMinutes label='pomodoro' initial={pomodoro}/>
            <InputMinutes label='short break' initial={short}/>
            <InputMinutes label='long break' initial={long}/>
        </section>
    )
}

export default SelectMinutes;
