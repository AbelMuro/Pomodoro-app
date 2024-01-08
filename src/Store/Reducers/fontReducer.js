export default function fontReducer(font = 'kumbh sans', action){
    switch(action.type){
        case 'UPDATE_FONT':
            return action.font;
        default: 
            return font;
    }
}