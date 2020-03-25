import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Header from '../header/header.jsx';
import PlacesList from '../places-list/places-list.jsx';
import {ParentNode} from '../../const.js';
import {getCorrectFavorites} from '../../utils.js';

const Favorites = ({favorite, userInfo, userAuth}) => {
  return (
    <div className="page" >
      <Header
        userAuth={userAuth}
        userInfo={userInfo}
      />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favorite.length ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {getCorrectFavorites(favorite).map((elem) => (
                  <li className="favorites__locations-items" key={elem.length + elem[0].id}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{elem[0].city.name}</span>
                        </a>
                      </div>
                    </div>
                    <PlacesList
                      offers={elem}
                      parentNode={ParentNode.FAVORITE}
                    />
                  </li>))}
              </ul>
            </section> :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>}

        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={`/`}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favorite: PropTypes.any,
  userAuth: PropTypes.any,
  userInfo: PropTypes.any,
  loadFavorite: PropTypes.any,
};

export default Favorites;
