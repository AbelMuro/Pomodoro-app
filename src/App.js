import React from 'react';
import Main from './Components/Main';
import SelectTime from './Components/SelectTime';
import Timer from './Components/Timer';
import Settings from './Components/Settings';
import store from './Store';
import { Provider } from 'react-redux';
import './styles.css';

function App() {
    return(
        <Provider store={store}>
            <Main>
                <SelectTime/>
                <Timer/>
                <Settings/>
            </Main>
        </Provider>
    )
}

export default App;