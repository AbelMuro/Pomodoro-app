import React from 'react';
import styles from './styles.module.css';



function Timer() {


    return(
        <section className={styles.timer}>
            <div className={styles.timer_content}>
                <div className={styles.timer_progress} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </section>
    )
}

export default Timer;