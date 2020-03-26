import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';
import Sort from '../sort/sort.jsx';
import {getCoordinates} from '../../utils.js';
import {ParentNode} from '../../const.js';
import withStatus from '../../hocs/with-status/with-status.js';

const SortWrapped = withStatus(Sort);

const Cities = ({activeCity, offers, onPlaceCardHover, hoveredOffer}) => (
  <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {activeCity}</b>
      <SortWrapped />
      <PlacesList
        offers={offers}
        onPlaceCardHover={onPlaceCardHover}
        parentNode={ParentNode.MAIN}
      />
    </section>
    <div className="cities__right-section">
      <section className="cities__map map">
        <Map
          city={offers[0].city.location}
          coordinates={getCoordinates(offers)}
          hoveredOffer={hoveredOffer}
        />
      </section>
    </div>
  </div>
);

Cities.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.exact({
    'city': PropTypes.exact({
      'name': PropTypes.string,
      'location': PropTypes.exact({
        'latitude': PropTypes.number,
        'longitude': PropTypes.number,
        'zoom': PropTypes.number,
      }),
    }),
    'preview_image': PropTypes.string,
    'images': PropTypes.arrayOf(PropTypes.string),
    'title': PropTypes.string,
    'is_favorite': PropTypes.bool,
    'is_premium': PropTypes.bool,
    'rating': PropTypes.number,
    'type': PropTypes.string,
    'bedrooms': PropTypes.number,
    'max_adults': PropTypes.number,
    'price': PropTypes.number,
    'goods': PropTypes.arrayOf(PropTypes.string),
    'host': PropTypes.exact({
      'id': PropTypes.number,
      'name': PropTypes.string,
      'is_pro': PropTypes.bool,
      'avatar_url': PropTypes.string,
    }),
    'description': PropTypes.string,
    'location': PropTypes.exact({
      'latitude': PropTypes.number,
      'longitude': PropTypes.number,
      'zoom': PropTypes.number,
    }),
    'id': PropTypes.number,
  })).isRequired,
  onPlaceCardHover: PropTypes.func.isRequired,
  hoveredOffer: PropTypes.any,
};

export default Cities;
