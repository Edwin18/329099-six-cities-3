import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/app/app.jsx';
import reducer from './reducer/reducer.js';
import {Operation as DataOperation} from './reducer/data/data.js';
// import {Operation as UserOperation} from './reducer/user/user.js';
import {createAPI} from './api.js';
import {Router} from "react-router-dom";
import history from "./history.js";

const api = createAPI(() => history.push(`/login`));
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

// store.dispatch(UserOperation.checkAuth());
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

