import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

/** routing */
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

/** redux  */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers/index';

const store = createStore(
    reducers,
     applyMiddleware(thunk)
);


const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <HashRouter>
                <Provider store={store}>
                    <Component />
                </Provider>    
            </HashRouter>
        </AppContainer>,
        document.getElementById('root'),
    );
};
render(App);


serviceWorker.unregister();
