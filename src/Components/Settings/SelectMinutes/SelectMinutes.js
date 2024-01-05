import React from 'react';
import InputMinutes from './InputMinutes';
import styles from './styles.module.css';

function SelectMinutes(){
    return(
        <section>
            <h1 className={styles.select_title}>
                {`Time (Minutes)`}
            </h1>
            <InputMinutes/>
        </section>
    )
}

export default SelectMinutes;
