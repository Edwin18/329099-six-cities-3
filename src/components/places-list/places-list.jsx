import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const ParentNode = {
  MAIN: `MAIN`,
  PROPERTY: `PROPERTY`
};

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = null;
    this._parentNode = null;

    this.placeCardHoverHandler = this.placeCardHoverHandler.bind(this);
  }

  placeCardHoverHandler(item) {
    this.setState(item);
  }

  setParentNode(parentNode) {
    switch (parentNode) {
      case ParentNode.MAIN:
        this._parentNode = `cities__places-list places__list tabs__content`;
        break;
      case ParentNode.PROPERTY:
        this._parentNode = `near-places__list places__list`;
        break;
    }
  }

  render() {
    const {offers, onHeadingLinkClick, parentNode} = this.props;
    this.setParentNode(parentNode);

    return (
      <React.Fragment>
        <div className={this._parentNode}>
          {offers.map((offer) => (
            <PlaceCard
              offer={offer}
              onHeadingLinkClick={onHeadingLinkClick}
              onPlaceCardHover={this.placeCardHoverHandler}
              key={offer.price + offer.rating}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
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
    cords: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired,
  onHeadingLinkClick: PropTypes.func.isRequired,
  parentNode: PropTypes.string.isRequired,
};

export default PlacesList;
