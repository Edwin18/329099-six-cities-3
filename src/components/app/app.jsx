import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import Property from '../property/property.jsx';
import {getOffersList} from '../../utils.js';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredOffer: null,
    };

    this.handlePalceCardHover = this.handlePalceCardHover.bind(this);
  }

  render() {
    const {currentOffers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-property">
            <Property
              offer={currentOffers[0]}
              onPlaceCardHover={this.handlePalceCardHover}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  handlePalceCardHover(offer) {
    this.setState({hoveredOffer: offer});
  }

  _renderApp() {
    const {currentOffer, activeCity, currentOffers} = this.props;
    if (currentOffer) {
      return (
        <Property
          offer={currentOffer}
          onPlaceCardHover={this.handlePalceCardHover}
        />
      );
    }

    if (!currentOffer) {
      return (
        <Main
          activeCity={activeCity}
          available={currentOffers.length}
          offers={currentOffers}
          onPlaceCardHover={this.handlePalceCardHover}
          hoveredOffer={this.state.hoveredOffer}
        />
      );
    }

    return null;
  }
}

App.propTypes = {
  activeCity: PropTypes.string.isRequired,
  currentOffer: PropTypes.exact({
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
  }),
  currentOffers: PropTypes.arrayOf(PropTypes.exact({
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
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  currentOffers: getOffersList(state.activeCity),
  currentOffer: state.currentOffer,
});

export {App};
export default connect(mapStateToProps)(App);
