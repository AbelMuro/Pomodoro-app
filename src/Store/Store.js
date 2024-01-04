import {configureStore} from '@reduxjs/toolkit';
import reducer from './Reducers';

const store = configureStore({                      //this will create the store with a reducer
    reducer: reducer
})

export default store;