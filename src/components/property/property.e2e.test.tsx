import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Property} from './property';

const offer = {
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
};
const nearby = [
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
  },
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
    'id': 10
  },
];
const comments = [
  {
    'id': 1,
    'user': {
      'id': 4,
      'is_pro': false,
      'name': `Max`,
      'avatar_url': `img/avatar-max.jpg`
    },
    'rating': 5,
    'comment': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    'date': `2019-05-08T14:13:56.569Z`,
  },
  {
    'id': 2,
    'user': {
      'id': 5,
      'is_pro': false,
      'name': `Max`,
      'avatar_url': `img/avatar-max.jpg`
    },
    'rating': 1,
    'comment': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    'date': `2019-05-08T14:13:56.569Z`,
  },
];
const match = {
  params: {
    id: `5`,
  },
};
const userInfo = {
  'avatar_url': `img/1.png`,
  'email': `Oliver.conner@gmail.com`,
  'id': 1,
  'is_pro': false,
  'name': `Oliver.conner`
};
const userAuth = `AUTH`;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user submit comment`, () => {
  const onFavoriteBtnClick = jest.fn();
  const onSubmit = jest.fn();

  const property = Enzyme.shallow(
      <Property
        offer={offer}
        userAuth={userAuth}
        userInfo={userInfo}
        comments={comments}
        onSubmit={onSubmit}
        nearby={nearby}
        onFavoriteBtnClick={onFavoriteBtnClick}
        match={match}
      />
  );

  const favoriteBtn = property.find(`.property__bookmark-button`);

  favoriteBtn.simulate(`click`);

  expect(onFavoriteBtnClick).toBeCalledWith(offer.id, offer.is_favorite);
});
