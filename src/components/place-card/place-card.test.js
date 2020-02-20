import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const offer = {
  id: 1,
  img: [
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/room.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-03.jpg`,
  ],
  premium: true,
  price: 120,
  name: `Palce A`,
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Vivamus aliquet eros nisi, nec semper eros tempus nec.`,
    `Pellentesque efficitur lectus et quam dapibus, a ultrices neque auctor.`,
  ],
  type: `Apartment`,
  rating: 80,
  bedrooms: 3,
  guests: 4,
  household: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
  ],
  host: {
    img: `img/avatar-angelina.jpg`,
    name: `Angelina`,
    super: false,
  },
  cords: [52.3709553943508, 4.89309666406198],
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
