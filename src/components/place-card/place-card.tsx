import React from 'react';
import PropTypes from 'prop-types';
import {ParentNode, DELETE_MARKER, AuthorizationStatus} from '../../const.js';
import {getCorrectRatingNumber, getCorrectTypeOfApartments} from '../../utils.js';
import history from "../../history.js";

const PlaceCard = ({offer, onCardHeadingLinkClick, onPlaceCardHover, onFavoriteBtnClick, parentNode, userAuth, onNearbyFavoriteClickBtn}) => {
  let _parentNode;
  let _isMain;

  switch (parentNode) {
    case ParentNode.MAIN:
      _parentNode = {
        article: `cities__place-card place-card`,
        div: `cities__image-wrapper place-card__image-wrapper`,
        image: {
          width: 260,
          height: 200,
        },
      };
      _isMain = true;
      break;
    case ParentNode.PROPERTY:
      _parentNode = {
        article: `near-places__card place-card`,
        div: `near-places__image-wrapper place-card__image-wrapper`,
        image: {
          width: 260,
          height: 200,
        },
      };
      _isMain = false;
      break;
    case ParentNode.FAVORITE:
      _parentNode = {
        article: `favorites__card place-card`,
        div: `favorites__image-wrapper place-card__image-wrapper`,
        image: {
          width: 150,
          height: 110,
        },
      };
      _isMain = false;
      break;
  }

  return (
    <article
      className={_parentNode.article}
      onMouseEnter={_isMain ? () => (onPlaceCardHover(offer)) : null}
      onMouseLeave={_isMain ? () => (onPlaceCardHover(DELETE_MARKER)) : null}>
      {offer.is_premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}
      <div className={_parentNode.div}>
        <a href="#">
          <img className="place-card__image" src={offer.preview_image} width={_parentNode.image.width} height={_parentNode.image.height} alt="Place image" />
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
            onClick={userAuth === AuthorizationStatus.AUTH ? () => {
              onFavoriteBtnClick(offer.id, offer.is_favorite);

              if (parentNode === ParentNode.PROPERTY) {
                onNearbyFavoriteClickBtn();
              }
            } : () => (history.push(`/login`))}
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
  userAuth: PropTypes.any,
  onNearbyFavoriteClickBtn: PropTypes.any,
};

export default PlaceCard;
