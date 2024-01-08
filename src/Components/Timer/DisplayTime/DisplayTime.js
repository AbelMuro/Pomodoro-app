import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function DisplayTime({minutes, seconds}) {
    const [mobile] = useMediaQuery('(max-width: 530px)');
    const font = useSelector(state => state.font);
    const displayTimeRef = useRef();

    const formatSeconds = () => {
        return String(seconds).length === 2 ? seconds : `0${seconds}`;
    }

    const formatMinutes = () => {
        return String(minutes).length === 2 ? minutes : `0${minutes}`;
    }

    useEffect(() => {
        if(font === 'kumbh sans')
            displayTimeRef.current.style.letterSpacing = mobile ? '-4px' : '-5px';
        else if(font === 'space mono')
            displayTimeRef.current.style.letterSpacing = '-10px';
        else    
            displayTimeRef.current.style.letterSpacing = '';
    }, [font, mobile])


    return(                    
        <strong className={styles.time} ref={displayTimeRef}>
            {`${formatMinutes()}:${formatSeconds()}`}
        </strong>
    )
}

export default DisplayTime;