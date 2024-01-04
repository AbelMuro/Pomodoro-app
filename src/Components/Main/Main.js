import React from 'react';
import styles from './styles.module.css';

function Main({children}) {
    return(
        <main className={styles.main}>
            <h1 className={styles.main_title}>
                pomodoro
            </h1>
            {children}
        </main>
    )
}

export default Main;