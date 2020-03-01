import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import LocationsItem from '../locations-item/locations-item.jsx';

const LocationsList = ({cities, activeCity, onCityLinkClick}) => {
  return (
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
};

LocationsList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityLinkClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeOffers(city));
  },
});

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
