import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

const offers = [
  {
    name: `Place A`,
    img: `img/apartment-01.jpg`,
    price: 500,
    rating: 50,
    type: `Apartment`,
    period: `All Day Long`,
    premium: true
  },
  {
    name: `Place B`,
    img: `img/room.jpg`,
    price: 400,
    rating: 30,
    type: `Private room`,
    period: `All Day Long`,
    premium: false
  },
  {
    name: `Place C`,
    img: `img/apartment-02.jpg`,
    price: 600,
    rating: 20,
    type: `Apartment`,
    period: `All Day Long`,
    premium: true
  },
  {
    name: `Place D`,
    img: `img/apartment-03.jpg`,
    price: 700,
    rating: 10,
    type: `Apartment`,
    period: `All Day Long`,
    premium: false
  },
];

it(`Render PlacesList`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={offers}
      onHeadingLinkClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
