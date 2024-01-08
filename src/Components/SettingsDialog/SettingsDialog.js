import React, {useState, useEffect, useRef} from 'react';
import SelectMinutes from './SelectMinutes';
import SelectFont from './SelectFont';
import SelectColor from './SelectColor';
import styles from './styles.module.css';
import {useDispatch} from 'react-redux';

function Settings() {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef();
    const dialogRef = useRef();
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const allInputs = e.target.elements;     
        const pomodoro = allInputs['pomodoro'].value;
        const short = allInputs['short break'].value;
        const long = allInputs['long break'].value;
        const font = allInputs['font'].value;
        const color = allInputs['color'].value;

        dispatch({
            type: 'UPDATE_BREAKS',
            pomodoro,
            short,
            long,
        });
        dispatch({
            type: 'UPDATE_THEME',
            theme: color
        })
        dispatch({
            type: 'UPDATE_FONT',
            font,
        })
        document.querySelector(':root').style.setProperty('--font', font);
    }

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'flex';
            setTimeout(() => {
                if(!overlayRef.current || !dialogRef.current) return;
                overlayRef.current.style.backgroundColor = 'rgba(10, 12, 28, 0.50)';
                dialogRef.current.style.transform = 'scale(1)';
            }, 10)
        }
        else{
            dialogRef.current.style.transform = '';                
            overlayRef.current.style.backgroundColor = '';
            setTimeout(() => {
                if(!overlayRef.current) return;

                overlayRef.current.style.display = '';
            }, 200)
        }
    }, [open])

    return(
        <>
            <button className={styles.settings_open} onClick={handleOpen}></button>

            <div className={styles.overlay} ref={overlayRef}>
                <dialog open={true} className={styles.dialog} ref={dialogRef}>
                    <section className={styles.dialog_title}>
                        <h1>
                            Settings
                        </h1>
                        <button className={styles.dialog_close} onClick={handleOpen}></button>
                    </section>
                    <hr/>
                    <form className={styles.dialog_form} onSubmit={handleSubmit}>
                        <SelectMinutes/>   
                        <hr/>
                        <SelectFont/>
                        <hr/>
                        <SelectColor/>
                        <button className={styles.dialog_submit} onClick={handleOpen}>
                            Apply    
                        </button>                            
                    </form>
                </dialog>
            </div>
        </>
    )
}

export default Settings;