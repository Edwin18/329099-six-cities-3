import React from 'react';
import PropTypes from 'prop-types';
import {ParentNode, DELETE_MARKER} from '../../const.js';
import {getCorrectRatingNumber, getCorrectTypeOfApartments} from '../../utils.js';

const PlaceCard = ({offer, onCardHeadingLinkClick, onPlaceCardHover, onFavoriteBtnClick, parentNode}) => {
  let _parentNode;
  let _isMain;

  switch (parentNode) {
    case ParentNode.MAIN:
      _parentNode = `cities__place-card place-card`;
      _isMain = true;
      break;
    case ParentNode.PROPERTY:
      _parentNode = `near-places__card place-card`;
      _isMain = false;
      break;
  }

  return (
    <article
      className={_parentNode}
      onMouseEnter={_isMain ? () => (onPlaceCardHover(offer)) : null} // В ТЗ о ховере на соседей ничего не сказано, либо оставлю так либо сделаю ховер соседей
      onMouseLeave={_isMain ? () => (onPlaceCardHover(DELETE_MARKER)) : null}>
      {offer.is_premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.preview_image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={offer.is_favorite ?
              `place-card__bookmark-button button place-card__bookmark-button--active` :
              `place-card__bookmark-button button`}
            type="button"
            onClick={() => (onFavoriteBtnClick(offer.id, offer.is_favorite))}
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
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.exact({
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
  }),
  onCardHeadingLinkClick: PropTypes.func,
  onPlaceCardHover: PropTypes.func,
  onFavoriteBtnClick: PropTypes.func,
  parentNode: PropTypes.string,
};

export default PlaceCard;
