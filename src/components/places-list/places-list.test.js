import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

const offers = [
  {
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
    price: 500,
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
  },
  {
    id: 2,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-03.jpg`,
    ],
    premium: true,
    price: 300,
    name: `Palce B`,
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Vivamus aliquet eros nisi, nec semper eros tempus nec.`,
      `Pellentesque efficitur lectus et quam dapibus, a ultrices neque auctor.`,
    ],
    type: `Apartment`,
    rating: 100,
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
  },
  {
    id: 3,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-03.jpg`,
    ],
    premium: true,
    price: 456,
    name: `Palce C`,
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
  },
  {
    id: 4,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-03.jpg`,
    ],
    premium: true,
    price: 789,
    name: `Palce D`,
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
  },
];

const ParentNode = {
  MAIN: `MAIN`,
  PROPERTY: `PROPERTY`
};

it(`Render PlacesList MAIN`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={offers}
      onHeadingLinkClick={() => {}}
      parentNode={ParentNode.MAIN}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render PlacesList PROPERTY`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={offers}
      onHeadingLinkClick={() => {}}
      parentNode={ParentNode.PROPERTY}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
