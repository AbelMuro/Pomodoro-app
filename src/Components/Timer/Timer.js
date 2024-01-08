import React, {useRef, useState, useEffect} from 'react';
import styles from './styles.module.css';
import CircularProgressBar from './CircularProgressBar';
import DisplayTime from './DisplayTime';
import {useSelector} from 'react-redux';
 

function Timer() {
    const totalMinutes = useSelector(state => state.time.current.minutes);
    const color = useSelector(state => state.theme);
    const [minutes, setMinutes] = useState(totalMinutes);
    const [seconds, setSeconds] = useState(0);
    const [playButton, setPlayButton] = useState('start');
    const timer = useRef();
    const playButtonRef = useRef();

    const handleEnter = () => {
        playButtonRef.current.style.color = color;
    }

    const handleLeave = () => {
        playButtonRef.current.style.color = '';
    }

    const handleStart = () => {
        playButtonRef.current.innerHTML = 'pause';
        setPlayButton('pause');
        timer.current = setInterval(() => setSeconds((prevSec) => prevSec - 1 >= 0 ? prevSec - 1 : 59), 1000)
    }

    const handlePause = () => {
        playButtonRef.current.innerHTML = 'start';
        setPlayButton('start');
        clearInterval(timer.current);
    }

    const handleRestart = async () => {
        playButtonRef.current.innerHTML = 'start';
        setPlayButton('start');        
        setMinutes(totalMinutes);
        setSeconds(0);
        handleStart();
    }

    const handleEventHandlers = () => {
        if(playButton === 'start')
            return handleStart;
        else if(playButton === 'pause')
            return handlePause;
        else    
            return handleRestart;
    }

    //we decrement minutes by 1 every time seconds is reaches 59
    useEffect(() => {
        if(seconds === 59)
            setMinutes(prevMin => prevMin - 1);
    }, [seconds])   
    
    //once the timer ends, we change the inner text of the play button to RESTART
    useEffect(() => {
        if(minutes === 0 && seconds === 0){
            clearInterval(timer.current);
            playButtonRef.current.innerHTML = 'restart';            
            setPlayButton('restart');             
        }
    }, [minutes, seconds])    

    //we reset the timer everytime there is a change in the global state
    useEffect(() => {
        setMinutes(totalMinutes);
        setSeconds(0);
        clearInterval(timer.current);
        setPlayButton('start');  
        if(playButtonRef.current)
            playButtonRef.current.innerHTML = 'start';
    }, [totalMinutes])



    return(
        <section className={styles.timer}>
            <div className={styles.timer_content}>
                <CircularProgressBar 
                    totalMinutes={totalMinutes} 
                    minutes={minutes} 
                    seconds={seconds} 
                    color={color}
                />
                <div className={styles.timer_time}>
                    <DisplayTime minutes={minutes} seconds={seconds}/>
                    <button 
                        className={styles.timer_play} 
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave} 
                        onClick={handleEventHandlers()}
                        ref={playButtonRef}>
                            Start
                </button>
                </div>      
            </div>
        </section>
    )
}

export default Timer;