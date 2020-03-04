import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const city = {
  latitude: 53.550341,
  longitude: 10.000654,
  zoom: 13
};

const coordinates = [
  [52.3709553943508, 4.89309666406198],
  [52.3709553943508, 4.89309666406198],
  [52.3709553943508, 4.89309666406198],
  [52.3709553943508, 4.89309666406198],
];

const current = [52.3709553943508, 4.89309666406198];

const offer = {
  city: {
    name: `Hamburg`,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
  images: [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`],
  title: `The Joshua Tree House`,
  isFavorite: true,
  isPremium: false,
  rating: 2.2,
  type: `apartment`,
  bedrooms: 3,
  maxAdults: 9,
  price: 290,
  goods: [`Laptop friendly workspace`, `Dishwasher`, `Towels`, `Washing machine`, `Fridge`, `Breakfast`, `Air conditioning`, `Coffee machine`, `Washer`, `Cable TV`, `Baby seat`],
  host: {
    id: 25,
    name: `Angelina`,
    isPro: true,
    avatarUrl: `img/avatar-angelina.jpg`
  },
  description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
  location: {
    latitude: 53.573341000000006,
    longitude: 9.994654,
    zoom: 16
  },
  id: 1,
};

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map
      city={city}
      coordinates={coordinates}
      current={current}
      hoveredOffer={offer}
    />, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
