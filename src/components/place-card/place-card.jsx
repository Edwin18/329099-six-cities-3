import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = ({offer, onHeadingLinkClick, onPlaceCardHover}) => (
  <React.Fragment>
    <article
      className="cities__place-card place-card"
      key={offer.price + offer.rating}
      onMouseEnter={() => (onPlaceCardHover(offer))}
      onMouseLeave={() => (onPlaceCardHover(null))}>
      {offer.premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image" />
        </a>
      </div>``
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offer.period}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            href="#"
            onClick={onHeadingLinkClick}
          >{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  </React.Fragment>
);

PlaceCard.propTypes = {
  offer: PropTypes.exact({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired
  }).isRequired,
  onHeadingLinkClick: PropTypes.func.isRequired,
  onPlaceCardHover: PropTypes.func.isRequired
};

export default PlaceCard;