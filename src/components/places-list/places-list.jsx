import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PlaceCard from '../place-card/place-card.jsx';
import {ParentNode} from '../../const.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {getAuthorizationStatus} from '../../reducer/user/selector.js';
import history from "../../history.js";

const PlacesList = ({offers, onCardHeadingLinkClick, onPlaceCardHover, parentNode, onFavoriteBtnClick, userAuth, onNearbyFavoriteClickBtn}) => {
  let _parentNode;

  switch (parentNode) {
    case ParentNode.MAIN:
      _parentNode = `cities__places-list places__list tabs__content`;
      break;
    case ParentNode.PROPERTY:
      _parentNode = `near-places__list places__list`;
      break;
    case ParentNode.FAVORITE:
      _parentNode = `favorites__places`;
      break;
  }

  return (
    <div className={_parentNode}>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          onCardHeadingLinkClick={onCardHeadingLinkClick}
          onPlaceCardHover={onPlaceCardHover}
          onFavoriteBtnClick={onFavoriteBtnClick}
          onNearbyFavoriteClickBtn={onNearbyFavoriteClickBtn}
          parentNode={parentNode}
          userAuth={userAuth}
          key={offer.id}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.exact({
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
  })),
  onCardHeadingLinkClick: PropTypes.func,
  onPlaceCardHover: PropTypes.func,
  parentNode: PropTypes.string,
  onFavoriteBtnClick: PropTypes.func,
  userAuth: PropTypes.any,
  onNearbyFavoriteClickBtn: PropTypes.any,
};

const mapStateToProps = (state) => ({
  userAuth: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCardHeadingLinkClick(offer) {
    history.push(`/offer/${offer.id}`);
  },
  onFavoriteBtnClick(id, isFavorite) {
    dispatch(DataOperation.toggleFavorite(id, isFavorite));
  },
});

export {PlacesList};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
