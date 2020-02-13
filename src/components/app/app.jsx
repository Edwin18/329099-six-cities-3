import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const headingLinkHandler = () => {};

const App = ({available, offers}) => (
  <Main
    available={available}
    offers={offers}
    onHeadingLinkClick={headingLinkHandler}
  />
);

App.propTypes = {
  available: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired
  })).isRequired
};

export default App;
