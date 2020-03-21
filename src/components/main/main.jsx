import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import LocationsList from '../locations-list/locations-list.jsx';
import Cities from '../cities/cities.jsx';
import CitiesEmpty from '../cities-empty/cities-empty.jsx';
import withHover from '../../hocs/with-hover/with-hover.js';
import {AuthorizationStatus} from '../../const.js';

const CitiesWrapped = withHover(Cities);

const Main = ({activeCity, offers, userAuth, userInfo}) => (
  <div
    className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {userAuth === AuthorizationStatus.AUTH ?
                  <Link className="header__nav-link header__nav-link--profile" to={`/favorites`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userInfo.email}</span>
                  </Link> :
                  <Link className="header__nav-link header__nav-link--profile" to={`/login`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

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
