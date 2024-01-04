import { combineReducers } from 'redux'
import timeReducer from './timeReducer.js';
import themeReducer from './themeReducer.js';


const reducer = combineReducers({
    time: timeReducer,
    theme: themeReducer
})
export default reducer