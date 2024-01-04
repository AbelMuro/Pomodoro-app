export default function themeReducer(theme = '#F87070', action){
    switch(action.type){
        case 'UPDATE_THEME':
            return action.theme;
        default: 
            return theme;
            
    }
}