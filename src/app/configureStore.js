import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    // The line (of code) below is useful only if the dev tools for Redux are installed.
    // There is a Google Chrome extension:
    // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
    // More information here: https://github.com/zalmoxisus/redux-devtools-extension
    typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension({ serialize: true }) :
        f => f
)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(rootReducer);
}
