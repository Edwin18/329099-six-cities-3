import React from 'react';
import PropTypes from 'prop-types';

const LocationsItem = ({city, isActive, onCityLinkClick}) => (
  <li className="locations__item" key={city}>
    <a
      className={isActive ?
        `locations__item-link tabs__item tabs__item--active` :
        `locations__item-link tabs__item`}
      href="#"
      onClick={() => (onCityLinkClick(city))}
    >
      <span>{city}</span>
    </a>
  </li>
);

LocationsItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onCityLinkClick: PropTypes.func.isRequired,
};

export default LocationsItem;
