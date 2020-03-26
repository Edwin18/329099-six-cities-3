import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {store} from '../../index.js';
import Header from '../header/header.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Comments from '../comments/comments.jsx';
import {getCurrentOffer} from '../../reducer/cities/selector.js';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selector.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {Operation as CommentsOperation} from '../../reducer/comments/comments.js';
import {Operation as NearbyOperation} from '../../reducer/nearby/nearby.js';
import {getCurrentComments} from '../../reducer/comments/selector.js';
import {getNearby} from '../../reducer/nearby/selector.js';
import {getCoordinates, getCorrectRatingNumber, getCorrectTypeOfApartments} from '../../utils.js';
import {ParentNode, AuthorizationStatus, DELETE_MARKER} from '../../const.js';
import history from "../../history.js";

const MAX_IMG_COUNT = 6;

class Property extends PureComponent {
  constructor(props) {
    super(props);

    this.id = parseInt(props.match.params.id, 10);

    if (props.offer === undefined) {
      return;
    }

    store.dispatch(CommentsOperation.loadComments(this.id));
    store.dispatch(NearbyOperation.loadNearby(this.id));

    this.nearbyFavoriteBtnClickHandler = this.nearbyFavoriteBtnClickHandler.bind(this);
  }

  nearbyFavoriteBtnClickHandler() {
    store.dispatch(NearbyOperation.loadNearby(this.id));
  }

  render() {
    const {offer, userAuth, userInfo, comments, onSubmit, nearby, onFavoriteBtnClick} = this.props;

    if (offer === undefined) {
      return null;
    }

    const neighbourhoodCoordinates = getCoordinates(nearby);
    const currentCoordinates = [offer.location.latitude, offer.location.longitude];

    return (
      <div className="page">
        <Header
          userAuth={userAuth}
          userInfo={userInfo}
        />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">

                {offer.images.slice(0, MAX_IMG_COUNT).map((elem, i) => (
                  <div className="property__image-wrapper" key={elem + i}>
                    <img className="property__image" src={elem} alt="Photo studio" />
                  </div>
                ))}

              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">

                {offer.is_premium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : null}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button
                    className={offer.is_favorite ?
                      `property__bookmark-button button property__bookmark-button--active` :
                      `property__bookmark-button button`}
                    type="button"
                    onClick={userAuth === AuthorizationStatus.AUTH ? () => {
                      onFavoriteBtnClick(offer.id, offer.is_favorite);
                    } : () => (history.push(`/login`))}
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
                parentNode={ParentNode.PROPERTY}
                onNearbyFavoriteClickBtn={this.nearbyFavoriteBtnClickHandler}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

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
  onFavoriteBtnClick: PropTypes.any,
  userAuth: PropTypes.any,
  userInfo: PropTypes.any,
  comments: PropTypes.any,
  onSubmit: PropTypes.any,
  nearby: PropTypes.any,
  match: PropTypes.any,
};

const mapStateToProps = (state, ownProps) => ({
  offer: getCurrentOffer(state, ownProps),
  userAuth: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
  comments: getCurrentComments(state),
  nearby: getNearby(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, commentInfo, form, btn) {
    dispatch(CommentsOperation.postComment(id, commentInfo, form, btn));
  },
  onFavoriteBtnClick(id, isFavorite) {
    dispatch(DataOperation.toggleFavorite(id, isFavorite));
  },
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
