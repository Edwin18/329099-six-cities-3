import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import PlaceCard from '../place-card/place-card.jsx';
import {ParentNode} from '../../const.js';

const PlacesList = ({offers, onCardHeadingLinkClick, onPlaceCardHover, parentNode}) => {

  const setParentNode = () => {
    let _parentNode = null;

    switch (parentNode) {
      case ParentNode.MAIN:
        _parentNode = `cities__places-list places__list tabs__content`;
        break;
      case ParentNode.PROPERTY:
        _parentNode = `near-places__list places__list`;
        break;
    }

    return _parentNode;
  };

  return (
    <div className={setParentNode()}>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          onCardHeadingLinkClick={onCardHeadingLinkClick}
          onPlaceCardHover={onPlaceCardHover}
          parentNode={parentNode}
          key={offer.price + offer.rating}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.exact({
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
  })).isRequired,
  onCardHeadingLinkClick: PropTypes.func.isRequired,
  onPlaceCardHover: PropTypes.func.isRequired,
  parentNode: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCardHeadingLinkClick(offer) {
    dispatch(ActionCreator.changeOffer(offer));
  },
});

export {PlacesList};
export default connect(() => ({}), mapDispatchToProps)(PlacesList);
