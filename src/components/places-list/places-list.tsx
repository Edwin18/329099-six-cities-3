import * as React from 'react';
import {connect} from 'react-redux';
import PlaceCard from '../place-card/place-card';
import {Operation as DataOperation} from '../../reducer/data/data';
import {getAuthorizationStatus} from '../../reducer/user/selector';
import {ParentNode} from '../../const';
import {Offer} from '../../types';

type Props = {
  offers: Array<Offer>;
  parentNode: string;
  userAuth: string;
  onNearbyFavoriteClickBtn: () => void;
  onPlaceCardHover: (offer: Offer | string) => void;
  onFavoriteBtnClick: (id: number, isFavorite: boolean) => void;
};

const PlacesList: React.FC<Props> = ({
  offers,
  parentNode,
  userAuth,
  onNearbyFavoriteClickBtn,
  onPlaceCardHover,
  onFavoriteBtnClick,
}) => {
  let innerParentNode;

  switch (parentNode) {
    case ParentNode.MAIN:
      innerParentNode = `cities__places-list places__list tabs__content`;
      break;
    case ParentNode.PROPERTY:
      innerParentNode = `near-places__list places__list`;
      break;
    case ParentNode.FAVORITE:
      innerParentNode = `favorites__places`;
      break;
  }

  return (
    <div className={innerParentNode}>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          parentNode={parentNode}
          userAuth={userAuth}
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
  onFavoriteBtnClick(id, isFavorite) {
    dispatch(DataOperation.toggleFavorite(id, isFavorite));
  },
});

export {PlacesList};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
