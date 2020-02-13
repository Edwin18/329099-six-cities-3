import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';

const AVAILABLE = 459;

ReactDOM.render(
    <App
      available={AVAILABLE}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
