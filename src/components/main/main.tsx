import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import LocationsList from '../locations-list/locations-list.jsx';
import Cities from '../cities/cities.jsx';
import CitiesEmpty from '../cities-empty/cities-empty.jsx';
import withHover from '../../hocs/with-hover/with-hover.js';

const CitiesWrapped = withHover(Cities);

const Main = ({activeCity, offers, userAuth, userInfo}) => (
  <div className="page page--gray page--main">
    <Header
      userAuth={userAuth}
      userInfo={userInfo}
    />
    <main
      className={offers.length ?
        `page page--gray page--main` :
        `page__main page__main--index page__main--index-empty`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList />
        </section>
      </div>
      <div className="cities">
        {offers.length ?
          <CitiesWrapped
            offers={offers}
            activeCity={activeCity}
          /> :
          <CitiesEmpty
            activeCity={activeCity}
          />}
      </div>
    </main>
  </div>
);

Main.propTypes = {
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
  userAuth: PropTypes.any,
  userInfo: PropTypes.any,
};

export default Main;
