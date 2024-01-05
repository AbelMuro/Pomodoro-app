import React from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';
 

function Timer() {
    const time = useSelector(state => state.time.current)

    return(
        <section className={styles.timer}>
            <div className={styles.timer_content}>
                <div className={styles.timer_progressBar}>
                    <div></div>
                </div>                    
            </div>
        </section>
    )
}

export default Timer;