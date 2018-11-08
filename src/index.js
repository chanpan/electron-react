import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

/** routing */
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <HashRouter>
            {/* <Provider store={store}> */}
                <Component />
            </HashRouter>
        </AppContainer>,
        document.getElementById('root'),
    );
};
render(App);


serviceWorker.unregister();
