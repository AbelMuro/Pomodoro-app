import React from 'react';
import SelectMinutes from './SelectMinutes';
import SelectFont from './SelectFont';
import SelectColor from './SelectColor';
import styles from './styles.module.css';

function Settings() {
    return(
        <>
            <button className={styles.settings_open}></button>
            <div className={styles.overlay}>
                <dialog open={true} className={styles.overlay_dialog}>
                    <section className={styles.dialog_title}>
                        <h1>
                            Settings
                        </h1>
                        <button className={styles.dialog_close}></button>
                    </section>
                    <hr/>
                    <form className={styles.dialog_form}>
                        <SelectMinutes/>   
                        <hr/>
                        <SelectFont/>
                        <hr/>
                        <SelectColor/>
                    </form>
                </dialog>
            </div>
        </>
    )
}

export default Settings;