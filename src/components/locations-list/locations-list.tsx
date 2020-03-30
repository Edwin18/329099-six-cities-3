import * as React from 'react';
import {connect} from 'react-redux';
import LocationsItem from '../locations-item/locations-item';
import {ActionCreator} from '../../reducer/cities/cities';
import {getActiveCity, getCities} from '../../reducer/cities/selector';

type Props = {
  cities: Array<string>;
  activeCity: string;
  onCityLinkClick: (city: string) => void;
};

const LocationsList: React.FC<Props> = ({cities, activeCity, onCityLinkClick}) => (
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
