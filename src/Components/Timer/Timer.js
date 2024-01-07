import React, {useRef, useState, useEffect} from 'react';
import styles from './styles.module.css';
import ProgressBar from './ProgressBar';
import {useSelector} from 'react-redux';
 

function Timer() {
    const time = useSelector(state => state.time.current);              //remember, time represents minutes
    const color = useSelector(state => state.theme);
    const [minutes, setMinutes] = useState(time);
    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(true);
    const timer = useRef();
    const playButtonRef = useRef();

    const formatSeconds = () => {
        return String(seconds).length === 2 ? seconds : `0${seconds}`;
    }

    const formatMinutes = () => {
        return String(minutes).length === 2 ? minutes : `0${minutes}`;
    }

    const handleEnter = () => {
        playButtonRef.current.style.color = color;
    }

    const handleLeave = () => {
        playButtonRef.current.style.color = '';
    }

    const handleStart = () => {
        if(minutes === 0 && seconds === 0){
            setMinutes(time);
            setSeconds(0);
        }
        playButtonRef.current.innerHTML = 'pause';
        setStart(false);
        timer.current = setInterval(() => setSeconds((prevSec) => prevSec - 1 >= 0 ? prevSec - 1 : 59), 1000)
    }

    const handlePause = () => {
        playButtonRef.current.innerHTML = 'start';
        setStart(true);
        clearInterval(timer.current);
    }

    useEffect(() => {
        if(seconds === 59)
            setMinutes(prevMin => prevMin - 1);
    }, [seconds])   
    
    useEffect(() => {
        if(minutes === 0 && seconds === 0){
            clearInterval(timer.current);
            setStart(true);
            playButtonRef.current.innerHTML = 'restart';
        }
    }, [minutes, seconds])    

    useEffect(() => {
        setMinutes(time);
        setSeconds(0);
        clearInterval(timer.current);
        setStart(true);
        if(playButtonRef.current)
            playButtonRef.current.innerHTML = 'start';
    }, [time])


    return(
        <section className={styles.timer}>
            <div className={styles.timer_content}>
                <ProgressBar time={time} minutes={minutes} seconds={seconds} color={color}/>
                <div className={styles.timer_time}>
                    <strong>
                        {`${formatMinutes()}:${formatSeconds()}`}
                    </strong>
                    <button 
                        className={styles.timer_play} 
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave} 
                        onClick={start ? handleStart : handlePause}
                        ref={playButtonRef}>
                            Start
                </button>
                </div>      
            </div>
        </section>
    )
}

export default Timer;