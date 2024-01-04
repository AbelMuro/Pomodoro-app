export default function timeReducer(time = {current: '', pomodoro : 25, short : 5, long: 15 }, action){
    switch(action.type){
        case 'UPDATE_POMODORO': 
            return {...time, pomodoro: action.time}
        case 'UPDATE_SHORT': 
            return {...time, short: action.time}
        case 'UPDATE_LONG': 
            return {...time, long: action.time}
        case 'SELECT_POMODORO':
            return{...time, current: time.pomodoro}
        case 'SELECT_SHORT':
            return{...time, current: time.short}
        case 'SELECT_LONG':
            return{...time, current: time.long}
        default:
            return time;
    }
}