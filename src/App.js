import React from 'react';
import Main from './Components/Main';
import SelectTime from './Components/SelectTime';
import Timer from './Components/Timer';
import SettingsDialog from './Components/SettingsDialog';
import {store, persistedStore} from './Store';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import './styles.css';

function App() {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <Main>
                    <SelectTime/>
                    <Timer/>
                    <SettingsDialog/>
                </Main>                
            </PersistGate>
        </Provider>
    )
}

export default App;