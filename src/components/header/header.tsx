import * as React from 'react';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const.js';
import {User} from '../../types';

type Props = {
  userAuth: string;
  userInfo: User;
};

const Header: React.FC<Props> = ({userAuth, userInfo}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link header__logo-link--active" to={`/`}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              {userAuth === AuthorizationStatus.AUTH ?
                <Link className="header__nav-link header__nav-link--profile" to={`/favorites`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{userInfo.email}</span>
                </Link> :
                <Link className="header__nav-link header__nav-link--profile" to={`/login`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
