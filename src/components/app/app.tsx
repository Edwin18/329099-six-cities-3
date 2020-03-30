import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import NotExist from '../not-exist/not-exist';
import {Operation as UserOperation} from '../../reducer/user/user';
import {getAuthorizationStatus, getUserInfo} from '../../reducer/user/selector';
import {getCurrentOffers, getFavorite} from '../../reducer/data/selector';
import {getActiveCity} from '../../reducer/cities/selector';
import {AuthorizationStatus} from '../../const';
import {Offer, User, UserLogin} from '../../types';

type Props = {
  activeCity: string;
  currentOffers: Array<Offer>;
  userAuth: string;
  userInfo: User;
  login: (authData: UserLogin) => void;
  favorite: Array<Offer>;
};

const App: React.FC<Props> = ({currentOffers, activeCity, userAuth, login, userInfo, favorite}) => {
  return (
    <Switch>
      <Route exact path='/'>
        <Main
          offers={currentOffers}
          activeCity={activeCity}
          userAuth={userAuth}
          userInfo={userInfo}
        />
      </Route>
      <Route exact path='/login'>
        {userAuth === AuthorizationStatus.AUTH ? <Redirect to="/" /> :
          <SignIn
            onSubmit={login}
          />}
      </Route>
      <Route exact path='/offer/:id' component={Property} />
      <Route exact path='/favorites'>
        {userAuth === AuthorizationStatus.AUTH ? <Favorites
          favorite={favorite}
          userInfo={userInfo}
          userAuth={userAuth}
        /> : <Redirect to="/login" />}
      </Route>
      <Route exact path='/not-exist'>
        <NotExist />
      </Route>
    </Switch>
  );
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
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
