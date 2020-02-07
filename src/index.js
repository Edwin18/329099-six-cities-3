import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

const AVAILABLE = 459;
const places = [`Nice, cozy, warm big bed apartment`, `Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`];

ReactDOM.render(
    <App
      available={AVAILABLE}
      places={places}
    />,
    document.querySelector(`#root`)
);
