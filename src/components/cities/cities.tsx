import * as React from 'react';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import Sort from '../sort/sort';
import {getCoordinates} from '../../utils';
import {ParentNode} from '../../const';
import withStatus from '../../hocs/with-status/with-status';
import {Offer} from '../../types';

type Props = {
  activeCity: string;
  offers: Array<Offer>;
  onPlaceCardHover: () => void;
  hoveredOffer: Offer;
};

const SortWrapped = withStatus(Sort);

const Cities: React.FC<Props> = ({activeCity, offers, onPlaceCardHover, hoveredOffer}) => (
  <div className="cities__places-container container">
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {activeCity}</b>
      <SortWrapped />
      <PlacesList
        offers={offers}
        onPlaceCardHover={onPlaceCardHover}
        parentNode={ParentNode.MAIN}
      />
    </section>
    <div className="cities__right-section">
      <section className="cities__map map">
        <Map
          city={offers[0].city.location}
          coordinates={getCoordinates(offers)}
          hoveredOffer={hoveredOffer}
        />
      </section>
    </div>
  </div>
);

export default Cities;
