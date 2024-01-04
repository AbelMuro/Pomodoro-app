import React from 'react';
import Main from './Components/Main';
import SelectTime from './Components/SelectTime';
import Timer from './Components/Timer';
import store from './Store';
import { Provider } from 'react-redux';
import './styles.css';

function App() {
    return(
        <Provider store={store}>
            <Main>
                <SelectTime/>
                <Timer/>
            </Main>
        </Provider>
    )
}

export default App;