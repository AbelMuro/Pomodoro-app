export default function timeReducer(time = {current: '25', pomodoro : 25, short : 5, long: 15 }, action){
    switch(action.type){
        case 'UPDATE_BREAKS':
            return {...time, pomodoro : action.pomodoro, short: action.short, long: action.long} 
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