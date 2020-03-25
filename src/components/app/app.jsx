import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import Property from '../property/property.jsx';
import NotExist from '../not-exist/not-exist.jsx';
import {getActiveCity} from '../../reducer/cities/selector.js';
import {getCurrentOffers, getFavorite} from '../../reducer/data/selector.js';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selector.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {AuthorizationStatus} from '../../const.js';
import history from "../../history.js";

const App = ({currentOffers, activeCity, userAuth, login, userInfo, favorite}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Main
          offers={currentOffers}
          activeCity={activeCity}
          userAuth={userAuth}
          userInfo={userInfo}
        />
      </Route>
      <Route exact path="/login">
        {userAuth === AuthorizationStatus.AUTH ? () => (history.push(`/`)) :
          <SignIn
            onSubmit={login}
          />}
      </Route>
      <Route exact path="/offer/:id" component={Property} />
      <Route exact path="/favorites">
        {userAuth === AuthorizationStatus.AUTH ? <Favorites
          favorite={favorite}
          userInfo={userInfo}
          userAuth={userAuth}
        /> : () => (history.push(`/login`))}
      </Route>
      <Route exact path="/not-exist">
        <NotExist />
      </Route>
    </Switch>
  );
};

App.propTypes = {
  activeCity: PropTypes.string,
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
  })),
  userAuth: PropTypes.any,
  login: PropTypes.func,
  userInfo: PropTypes.any,
  favorite: PropTypes.any,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  currentOffers: getCurrentOffers(state),
  userAuth: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
  favorite: getFavorite(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData))
      .then(() => history.goBack());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
