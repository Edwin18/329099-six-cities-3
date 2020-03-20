import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import Property from '../property/property.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import withHover from '../../hocs/with-hover/with-hover.js';
import {getCurrentOffer} from '../../reducer/cities/selector.js';
import {getActiveCity} from '../../reducer/cities/selector.js';
import {getCurrentOffers} from '../../reducer/data/selector.js';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selector.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {AuthorizationStatus} from '../../const.js';

const PropertyWrapped = withHover(Property);

const App = ({currentOffer, currentOffers, activeCity, userAuth, login, userInfo}) => {
  const _renderApp = () => {
    if (userAuth === AuthorizationStatus.NO_AUTH) {
      return (
        <SignIn
          onSubmit={login}
        />
      );
    }
    if (currentOffer) {
      return (
        <PropertyWrapped />
      );
    }

    if (!currentOffer) {
      return (
        <Main
          offers={currentOffers}
          activeCity={activeCity}
          userAuth={userAuth}
          userInfo={userInfo}
        />
      );
    }

    return null;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderApp()}
        </Route>
        <Route exact path="/dev-property">
          <PropertyWrapped
            offer={currentOffer}
            userAuth={userAuth}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  activeCity: PropTypes.string.isRequired,
  currentOffer: PropTypes.exact({
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
  currentOffers: PropTypes.arrayOf(PropTypes.exact({
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
  })).isRequired,
  userAuth: PropTypes.any,
  login: PropTypes.func,
  userInfo: PropTypes.any,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  currentOffers: getCurrentOffers(state),
  currentOffer: getCurrentOffer(state),
  userAuth: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
