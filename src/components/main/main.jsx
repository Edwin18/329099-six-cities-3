import React from 'react';
import PropTypes from 'prop-types';
import LocationsList from '../locations-list/locations-list.jsx';
import Cities from '../cities/cities.jsx';
import CitiesEmpty from '../cities-empty/cities-empty.jsx';

const Main = ({activeCity, available, offers, onPlaceCardHover, hoveredOffer, activeSort, onSortItemClick}) => (
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
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
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
          <Cities
            activeCity={activeCity}
            available={available}
            offers={offers}
            onPlaceCardHover={onPlaceCardHover}
            hoveredOffer={hoveredOffer}
            activeSort={activeSort}
            onSortItemClick={onSortItemClick}
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
  })),
  onPlaceCardHover: PropTypes.func.isRequired,
  hoveredOffer: PropTypes.any,
  activeSort: PropTypes.string.isRequired,
  onSortItemClick: PropTypes.func.isRequired,
};

export default Main;
