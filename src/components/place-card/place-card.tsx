import * as React from 'react';
import {Link} from 'react-router-dom';
import {ParentNode, DELETE_MARKER, AuthorizationStatus} from '../../const';
import {getCorrectRatingNumber, getCorrectTypeOfApartment} from '../../utils';
import history from "../../history";
import {Offer} from '../../types';

type Props = {
  offer: Offer;
  parentNode: string;
  userAuth: string;
  onNearbyFavoriteClickBtn: () => void;
  onPlaceCardHover: (offer: Offer | string) => void;
  onFavoriteBtnClick: (id: number, isFavorite: boolean) => void;
};

const PlaceCard: React.FC<Props> = ({
  offer,
  parentNode,
  userAuth,
  onNearbyFavoriteClickBtn,
  onPlaceCardHover,
  onFavoriteBtnClick,
}) => {
  let innerParentNode;
  let isMain;

  switch (parentNode) {
    case ParentNode.MAIN:
      innerParentNode = {
        article: `cities__place-card place-card`,
        div: `cities__image-wrapper place-card__image-wrapper`,
        image: {
          width: 260,
          height: 200,
        },
      };
      isMain = true;
      break;
    case ParentNode.PROPERTY:
      innerParentNode = {
        article: `near-places__card place-card`,
        div: `near-places__image-wrapper place-card__image-wrapper`,
        image: {
          width: 260,
          height: 200,
        },
      };
      isMain = false;
      break;
    case ParentNode.FAVORITE:
      innerParentNode = {
        article: `favorites__card place-card`,
        div: `favorites__image-wrapper place-card__image-wrapper`,
        image: {
          width: 150,
          height: 110,
        },
      };
      isMain = false;
      break;
  }

  return (
    <article
      className={innerParentNode.article}
      onMouseEnter={isMain ? () => (onPlaceCardHover(offer)) : null}
      onMouseLeave={isMain ? () => (onPlaceCardHover(DELETE_MARKER)) : null}>
      {offer.is_premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}
      <div className={innerParentNode.div}>
        <a href="#">
          <img className="place-card__image" src={offer.preview_image} width={innerParentNode.image.width} height={innerParentNode.image.height} alt="Place image" />
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
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{getCorrectTypeOfApartment(offer.type)}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
