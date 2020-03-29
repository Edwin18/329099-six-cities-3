import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

import reducer from './reducer/reducer';
import {Operation as DataOperation} from './reducer/data/data';
import {Operation as UserOperation} from './reducer/user/user';

import {createAPI} from './api';

import history from './history';

const api = createAPI();
export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadFavorite());
store.dispatch(DataOperation.loadOffers())
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>,
        document.querySelector(`#root`)
    );
  });

