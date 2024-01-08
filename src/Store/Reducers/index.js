import { combineReducers } from 'redux'
import timeReducer from './timeReducer.js';
import themeReducer from './themeReducer.js';
import fontReducer from './fontReducer.js';

const reducer = combineReducers({
    time: timeReducer,
    theme: themeReducer,
    font: fontReducer
})
export default reducer