import React from 'react';
import PropTypes from 'prop-types';
import {ParentNode, DELETE_MARKER} from '../../const.js';
import {getCorrectRatingNumber, getCorrectTypeOfApartments} from '../../utils.js';

const PlaceCard = ({offer, onCardHeadingLinkClick, onPlaceCardHover, parentNode}) => {
  let _parentNode = null;

  switch (parentNode) {
    case ParentNode.MAIN:
      _parentNode = `cities__place-card place-card`;
      break;
    case ParentNode.PROPERTY:
      _parentNode = `near-places__card place-card`;
      break;
  }

  return (
    <React.Fragment>
      <article
        className={_parentNode}
        onMouseEnter={() => (onPlaceCardHover(offer))}
        onMouseLeave={() => (onPlaceCardHover(DELETE_MARKER))}>
        {offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : ``}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={offer.isFavorite ?
                `place-card__bookmark-button button place-card__bookmark-button--active` :
                `place-card__bookmark-button button`}
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${getCorrectRatingNumber(offer.rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a
              href="#"
              onClick={() => (onCardHeadingLinkClick(offer))}
            >{offer.title}</a>
          </h2>
          <p className="place-card__type">{getCorrectTypeOfApartments(offer.type)}</p>
        </div>
      </article>
    </React.Fragment>);
};

PlaceCard.propTypes = {
  offer: PropTypes.exact({
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
  }).isRequired,
  onCardHeadingLinkClick: PropTypes.func.isRequired,
  onPlaceCardHover: PropTypes.func.isRequired,
  parentNode: PropTypes.string.isRequired,
};

export default PlaceCard;
