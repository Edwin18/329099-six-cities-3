import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

const AVAILABLE = 459;

ReactDOM.render(
    <App
      available={AVAILABLE}
    />,
    document.querySelector(`#root`)
);
