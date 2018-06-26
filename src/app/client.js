import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => {
        const App = require('./app').default;
        render(App);
    });
}
