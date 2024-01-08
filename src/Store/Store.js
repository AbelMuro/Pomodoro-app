import {configureStore} from '@reduxjs/toolkit';
import reducer from './Reducers';
import {                
    persistStore,                                                                   
    persistReducer,                                                                
    FLUSH,                                                                          
    REHYDRATE,                                                                
    PAUSE,                                                                          
    PERSIST,                                                                     
    PURGE,                                                                          
    REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';    
import { getPersistConfig } from 'redux-deep-persist';


const config = getPersistConfig({
    key: 'pomodoro',
    storage,
    whitelist: ['theme', 'color'],                                          // we will only persist the theme state in the local storage
    rootReducer: reducer
});

const persistedReducer = persistReducer(config, reducer);


export const store = configureStore({                      //this will create the store with a reducer
    reducer: persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck: {ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
})

export const persistedStore = persistStore(store);