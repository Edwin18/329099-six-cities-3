import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';
import Sort from '../sort/sort.jsx';
import {getCoordinates, getSortedOffers} from '../../utils.js';
import {ParentNode} from '../../const.js';
import withStatus from '../../hocs/with-status/with-status.js';

const SortWrapped = withStatus(Sort);

const Cities = ({activeCity, available, offers, onPlaceCardHover, hoveredOffer, activeSort, onSortItemClick}) => (
  <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{available} places to stay in {activeCity}</b>
      <SortWrapped
        activeSort={activeSort}
        onSortItemClick={onSortItemClick}
      />
      <PlacesList
        offers={getSortedOffers(offers, activeSort)}
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
  available: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.exact({
    city: PropTypes.exact({
      name: PropTypes.string,
      location: PropTypes.exact({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number,
      }),
    }),
    previewImage: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
    rating: PropTypes.number,
    type: PropTypes.string,
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    price: PropTypes.number,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      isPro: PropTypes.bool,
      avatarUrl: PropTypes.string,
    }),
    description: PropTypes.string,
    location: PropTypes.exact({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
    id: PropTypes.number,
  })).isRequired,
  onPlaceCardHover: PropTypes.func.isRequired,
  hoveredOffer: PropTypes.any,
  activeSort: PropTypes.string.isRequired,
  onSortItemClick: PropTypes.func.isRequired,
};

export default Cities;
