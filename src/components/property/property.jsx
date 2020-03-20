import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Comments from '../comments/comments.jsx';
import {getCurrentOffer} from '../../reducer/cities/selector.js';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selector.js';
import {getCurrentComments} from '../../reducer/comments/selector.js';
import {Operation as CommentsOperation} from '../../reducer/comments/comments.js';
import {getNearby} from '../../reducer/nearby/selector.js';
import {getCoordinates, getCorrectRatingNumber, getCorrectTypeOfApartments} from '../../utils.js';
import {ParentNode, AuthorizationStatus, DELETE_MARKER} from '../../const.js';

const Property = ({offer, onCardHeadingLinkClick, onPlaceCardHover, userAuth, userInfo, comments, onSubmit, nearby}) => {
  const neighbourhoodCoordinates = getCoordinates(nearby);
  const currentCoordinates = [offer.location.latitude, offer.location.longitude];

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {userAuth === AuthorizationStatus.AUTH ?
                      <span className="header__user-name user__name">{userInfo.email}</span> :
                      <span className="header__login">Sign in</span>}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {offer.images.map((elem, i) => (
                <div className="property__image-wrapper" key={elem + i}>
                  <img className="property__image" src={elem} alt="Photo studio" />
                </div>
              ))}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {offer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : null}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button
                  className={offer.isFavorite ?
                    `property__bookmark-button button property__bookmark-button--active` :
                    `property__bookmark-button button`}
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getCorrectRatingNumber(offer.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{Math.round(offer.rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {getCorrectTypeOfApartments(offer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {offer.goods.map((elem, i) => (
                    <li className="property__inside-item" key={elem + i}>
                      {elem}
                    </li>
                  ))}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={offer.host.is_pro ?
                    `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` :
                    `property__avatar-wrapper property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer.host.avatar_url} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewsList
                  comments={comments}
                />
                {userAuth === AuthorizationStatus.AUTH ?
                  <Comments
                    onSubmit={onSubmit}
                    hotelId={offer.id}
                  /> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={offer.city.location}
              coordinates={neighbourhoodCoordinates}
              current={currentCoordinates}
              hoveredOffer={DELETE_MARKER}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              offers={nearby}
              onCardHeadingLinkClick={onCardHeadingLinkClick}
              onPlaceCardHover={onPlaceCardHover}
              parentNode={ParentNode.PROPERTY}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

Property.propTypes = {
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
  onPlaceCardHover: PropTypes.func.isRequired,
  userAuth: PropTypes.any,
  userInfo: PropTypes.any,
  comments: PropTypes.any,
  onSubmit: PropTypes.any,
  nearby: PropTypes.any,
};

const mapStateToProps = (state) => ({
  offer: getCurrentOffer(state),
  userAuth: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
  comments: getCurrentComments(state),
  nearby: getNearby(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, commentInfo, form) {
    dispatch(CommentsOperation.postComment(id, commentInfo, form));
  },
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
