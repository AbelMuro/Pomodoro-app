
export default function timeReducer(time = {current: {selected: 'pomodoro', minutes: 10}, pomodoro : 10, short : 1, long: 5 }, action){

    switch(action.type){
        case 'UPDATE_BREAKS':
            const currentBreak = time.current.selected;
            return {    
                        current: {selected: currentBreak, minutes: action[currentBreak]}, 
                        pomodoro: action.pomodoro, 
                        short: action.short, 
                        long: action.long
                    } 
        case 'SELECT_POMODORO':
            return{...time, current: {selected: 'pomodoro', minutes: time.pomodoro}}
        case 'SELECT_SHORT':
            return{...time, current: {selected: 'short', minutes: time.short}}
        case 'SELECT_LONG':
            return{...time, current: {selected: 'long', minutes: time.long}}
        default:
            return time;
    }
}