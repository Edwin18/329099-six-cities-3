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
          <img className="place-card__image" src={offer.img[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
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
            onClick={() => (onHeadingLinkClick(offer))}
          >{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  </React.Fragment>
);

PlaceCard.propTypes = {
  offer: PropTypes.exact({
    img: PropTypes.arrayOf(PropTypes.string).isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    household: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.exact({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  onHeadingLinkClick: PropTypes.func.isRequired,
  onPlaceCardHover: PropTypes.func.isRequired
};

export default PlaceCard;
