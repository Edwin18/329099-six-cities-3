import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = null;

    this.placeCardHoverHandler = this.placeCardHoverHandler.bind(this);
  }

  placeCardHoverHandler(item) {
    this.setState(item);
  }

  render() {
    const {offers, onHeadingLinkClick} = this.props;

    return (
      <React.Fragment>
        <div className="cities__places-list places__list tabs__content">
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
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired
  })).isRequired,
  onHeadingLinkClick: PropTypes.func.isRequired
};

export default PlacesList;
