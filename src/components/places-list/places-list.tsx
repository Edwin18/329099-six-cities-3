import * as React from 'react';
import {connect} from 'react-redux';
import history from '../../history';
import PlaceCard from '../place-card/place-card';
import {Operation as DataOperation} from '../../reducer/data/data';
import {getAuthorizationStatus} from '../../reducer/user/selector';
import {ParentNode} from '../../const';
import {Offer} from '../../types';

type Props = {
  offers: Array<Offer>;
  parentNode: string;
  userAuth: string;
  onCardHeadingLinkClick: (offer: Offer) => void;
  onNearbyFavoriteClickBtn: () => void;
  onPlaceCardHover: (offer: Offer | string) => void;
  onFavoriteBtnClick: (id: number, isFavorite: boolean) => void;
};

const PlacesList: React.FC<Props> = ({
  offers,
  parentNode,
  userAuth,
  onCardHeadingLinkClick,
  onNearbyFavoriteClickBtn,
  onPlaceCardHover,
  onFavoriteBtnClick,
}) => {
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
          parentNode={parentNode}
          userAuth={userAuth}
          onCardHeadingLinkClick={onCardHeadingLinkClick}
          onNearbyFavoriteClickBtn={onNearbyFavoriteClickBtn}
          onPlaceCardHover={onPlaceCardHover}
          onFavoriteBtnClick={onFavoriteBtnClick}
          key={offer.id}
        />
      ))}
    </div>
  );
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
