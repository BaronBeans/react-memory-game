import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import { AppContextProvider } from './state/AppContext';

ReactDOM.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>,
    document.getElementById('root'));

serviceWorker.register();
