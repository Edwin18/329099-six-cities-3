import * as React from 'react';
import Header from '../header/header';
import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';
import CitiesEmpty from '../cities-empty/cities-empty';
import withHover from '../../hocs/with-hover/with-hover';
import {Offer, User} from '../../types';

type Props = {
  activeCity: string;
  offers: Array<Offer>;
  userAuth: string;
  userInfo: User;
};

const CitiesWrapped = withHover(Cities);

const Main: React.FC<Props> = ({activeCity, offers, userAuth, userInfo}) => (
  <div className="page page--gray page--main">
    <Header
      userAuth={userAuth}
      userInfo={userInfo}
    />
    <main
      className={offers.length ?
        `page page--gray page--main` :
        `page__main page__main--index page__main--index-empty`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList />
        </section>
      </div>
      <div className="cities">
        {offers.length ?
          <CitiesWrapped
            offers={offers}
            activeCity={activeCity}
          /> :
          <CitiesEmpty
            activeCity={activeCity}
          />}
      </div>
    </main>
  </div>
);

export default Main;
