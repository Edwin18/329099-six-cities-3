import * as React from 'react';

type Props = {
  city: string;
  isActive: boolean;
  onCityLinkClick: (city: string) => void;
};

const LocationsItem: React.FC<Props> = ({city, isActive, onCityLinkClick}) => (
  <li className="locations__item">
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

export default LocationsItem;
