import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {Router} from 'react-router-dom';
import history from '../../history.js';

const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];
const offers = [
  {
    'city': {
      'name': `Hamburg`,
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'preview_image': `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`,
    'images': [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`],
    'title': `The Joshua Tree House`,
    'is_favorite': true,
    'is_premium': false,
    'rating': 2.2,
    'type': `apartment`,
    'bedrooms': 3,
    'max_adults': 9,
    'price': 290,
    'goods': [`Laptop friendly workspace`, `Dishwasher`, `Towels`, `Washing machine`, `Fridge`, `Breakfast`, `Air conditioning`, `Coffee machine`, `Washer`, `Cable TV`, `Baby seat`],
    'host': {
      'id': 25,
      'name': `Angelina`,
      'is_pro': true,
      'avatar_url': `img/avatar-angelina.jpg`
    },
    'description': `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 9.994654,
      'zoom': 16
    },
    'id': 1
  }, {
    'city': {
      'name': `Paris`,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'preview_image': `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`,
    'images': [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`],
    'title': `The Pondhouse - A Magical Place`,
    'is_favorite': false,
    'is_premium': false,
    'rating': 4.5,
    'type': `room`,
    'bedrooms': 1,
    'max_adults': 3,
    'price': 106,
    'goods': [`Washer`, `Breakfast`, `Laptop friendly workspace`],
    'host': {
      'id': 25,
      'name': `Angelina`,
      'is_pro': true,
      'avatar_url': `img/avatar-angelina.jpg`
    },
    'description': `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'id': 2
  }, {
    'city': {
      'name': `Dusseldorf`,
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'preview_image': `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
    'images': [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`],
    'title': `Loft Studio in the Central Area`,
    'is_favorite': false,
    'is_premium': true,
    'rating': 2.6,
    'type': `room`,
    'bedrooms': 1,
    'max_adults': 1,
    'price': 274,
    'goods': [`Breakfast`, `Laptop friendly workspace`],
    'host': {
      'id': 25,
      'name': `Angelina`,
      'is_pro': true,
      'avatar_url': `img/avatar-angelina.jpg`
    },
    'description': `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    'location': {
      'latitude': 51.222402,
      'longitude': 6.786314,
      'zoom': 16
    },
    'id': 3
  },
];
const userInfo = {
  'id': 1,
  'email': `Edwin18@mail.ru`,
  'name': `Edwin18`,
  'avatar_url': `/static/avatar/6.jpg`,
  'is_pro': false,
};
const activeSort = `popular`;
const userAuth = `AUTH`;

const mockStore = configureStore([]);
const store = mockStore({
  CITIES: {
    cities: CITIES,
    activeCity: CITIES[0],
    activeSort,
  },
  USER: {
    authorizationStatus: userAuth,
  },
});

it(`Render Main`, () => {
  const tree = renderer
    .create(<Router history={history}><Provider store={store}>
      <Main
        offers={offers}
        activeCity={CITIES[0]}
        userAuth={userAuth}
        userInfo={userInfo}
      />
    </Provider></Router>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
