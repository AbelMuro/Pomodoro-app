import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';

function SelectFont() {
    const [font, setFont] = useState('kumbh sans');
    const allButtons = useRef();

    const handleFont = (e) => {
        if(!e.target.matches('button')) return;
        const selectedFont = e.target.getAttribute('data-font');
        setFont(selectedFont);
    }

    useEffect(() => {
        const buttons = allButtons.current.children;
        Array.from(buttons).forEach((button) => {
            button.style.backgroundColor = '';
            button.style.color = ''
        });

        Array.from(buttons).forEach((button) => {
            if(button.getAttribute('data-font') === font){
                button.style.backgroundColor = '#161932';  
                button.style.color = 'white';              
            }
        })
    }, [font])

    return(
        <fieldset className={styles.selectFont}>
            <label>
                font
            </label>
            <div className={styles.fontButtons} onClick={handleFont} ref={allButtons}>
                <button type='button' data-font='kumbh sans'>Aa</button>
                <button type='button' data-font='roboto slab'>Aa</button>
                <button type='button' data-font='space mono'>Aa</button>                
            </div>
            <input type='hidden' value={font} onChange={() => {}}/>
        </fieldset>
    )
}

export default SelectFont;