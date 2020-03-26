import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/cities/cities.js';
import LocationsItem from '../locations-item/locations-item.jsx';
import {getActiveCity, getCities} from '../../reducer/cities/selector.js';

const LocationsList = ({cities, activeCity, onCityLinkClick}) => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <LocationsItem
        city={city}
        isActive={city === activeCity}
        onCityLinkClick={onCityLinkClick}
        key={city}
      />
    ))}
  </ul>
);

LocationsList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCity: PropTypes.string,
  onCityLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityLinkClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
