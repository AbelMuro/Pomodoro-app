import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function CircularProgressBar({totalMinutes, minutes, seconds, color}) {
    const [mobile] = useMediaQuery('(max-width: 530px)');    
    const [percentage, setPercentage] = useState('0');
    const circumferenceDesktop = 999.026464;    // 2 * PI * r
    const circumferenceMobile = 722.720248;     // 2 * PI * r

    useEffect(() => {
        const currentSeconds = (minutes * 60) + seconds;
        const totalSeconds = totalMinutes * 60;
        const currentPercentage = (currentSeconds/totalSeconds) * 100;

        if(mobile)
            setPercentage(circumferenceMobile - (currentPercentage/100) * circumferenceMobile);
        else
            setPercentage(circumferenceDesktop - (currentPercentage/100) * circumferenceDesktop);
    }, [minutes, seconds, mobile])

    return(
        <svg 
            className={styles.progressBar} 
            xmlns='https://www.w3.org/2000/svg' 
            version='1.1'>
                <circle stroke={color} strokeDashoffset={percentage}/>
        </svg>  
    )
}

export default CircularProgressBar;