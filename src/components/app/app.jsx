import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const headingLinkHandler = () => {};

const App = ({available, places}) => (
  <Main
    available={available}
    places={places}
    onHeadingLinkClick={headingLinkHandler}
  />
);

export default App;

App.propTypes = {
  available: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.string).isRequired
};
