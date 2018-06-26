import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
import RootContainer from './containers/RootContainer';
import './main.scss';

const history = createBrowserHistory();
const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={RootContainer} />
        </Router>
    </Provider>
);

export default App;
