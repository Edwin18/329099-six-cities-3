import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const offer = {
  name: `Place A`,
  img: `img/apartment-01.jpg`,
  price: 500,
  rating: 50,
  type: `Apartment`,
  period: `All Day Long`,
  premium: true
};

it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={offer}
      onHeadingLinkClick={() => {}}
      onPlaceCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
