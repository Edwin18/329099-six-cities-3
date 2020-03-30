import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';
import {ParentNode} from '../../const';

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
const DELETE_MARKER = `DELETE_MARKER`;
const userAuth = `AUTH`;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should be pressed click on heading`, () => {
  const onCardHeadingLinkClick = jest.fn();
  const onNearbyFavoriteClickBtn = jest.fn();
  const onPlaceCardHover = jest.fn();
  const onFavoriteBtnClick = jest.fn();

  const placeCard = Enzyme.shallow(
      <PlaceCard
        offer={offer}
        parentNode={ParentNode.MAIN}
        userAuth={userAuth}
        onCardHeadingLinkClick={onCardHeadingLinkClick}
        onNearbyFavoriteClickBtn={onNearbyFavoriteClickBtn}
        onPlaceCardHover={onPlaceCardHover}
        onFavoriteBtnClick={onFavoriteBtnClick}
      />
  );

  const headingLink = placeCard.find(`h2.place-card__name a`);

  headingLink.simulate(`click`);

  expect(onCardHeadingLinkClick.mock.calls.length).toBe(1);
});

it(`Should be pressed click on nearby favorite btn`, () => {
  const onCardHeadingLinkClick = jest.fn();
  const onNearbyFavoriteClickBtn = jest.fn();
  const onPlaceCardHover = jest.fn();
  const onFavoriteBtnClick = jest.fn();

  const placeCard = Enzyme.shallow(
      <PlaceCard
        offer={offer}
        parentNode={ParentNode.PROPERTY}
        userAuth={userAuth}
        onCardHeadingLinkClick={onCardHeadingLinkClick}
        onNearbyFavoriteClickBtn={onNearbyFavoriteClickBtn}
        onPlaceCardHover={onPlaceCardHover}
        onFavoriteBtnClick={onFavoriteBtnClick}
      />
  );

  const favoriteBtn = placeCard.find(`.place-card__bookmark-button`);

  favoriteBtn.simulate(`click`);

  expect(onNearbyFavoriteClickBtn.mock.calls.length).toBe(1);
});

it(`When user hover on card must be card "object"`, () => {
  const onCardHeadingLinkClick = jest.fn();
  const onNearbyFavoriteClickBtn = jest.fn();
  const onPlaceCardHover = jest.fn();
  const onFavoriteBtnClick = jest.fn();

  const placeCard = Enzyme.shallow(
      <PlaceCard
        offer={offer}
        parentNode={ParentNode.MAIN}
        userAuth={userAuth}
        onCardHeadingLinkClick={onCardHeadingLinkClick}
        onNearbyFavoriteClickBtn={onNearbyFavoriteClickBtn}
        onPlaceCardHover={onPlaceCardHover}
        onFavoriteBtnClick={onFavoriteBtnClick}
      />
  );

  placeCard.find(`article`).simulate(`mouseenter`);

  expect(onPlaceCardHover).toBeCalledWith(offer);
});

it(`When user hover out from card must be "DELETE_MARKER"`, () => {
  const onCardHeadingLinkClick = jest.fn();
  const onNearbyFavoriteClickBtn = jest.fn();
  const onPlaceCardHover = jest.fn();
  const onFavoriteBtnClick = jest.fn();

  const placeCard = Enzyme.shallow(
      <PlaceCard
        offer={offer}
        parentNode={ParentNode.MAIN}
        userAuth={userAuth}
        onCardHeadingLinkClick={onCardHeadingLinkClick}
        onNearbyFavoriteClickBtn={onNearbyFavoriteClickBtn}
        onPlaceCardHover={onPlaceCardHover}
        onFavoriteBtnClick={onFavoriteBtnClick}
      />
  );

  placeCard.find(`article`).simulate(`mouseleave`);

  expect(onPlaceCardHover).toBeCalledWith(DELETE_MARKER);
});

it(`Should be pressed click on favorite btn`, () => {
  const onCardHeadingLinkClick = jest.fn();
  const onNearbyFavoriteClickBtn = jest.fn();
  const onPlaceCardHover = jest.fn();
  const onFavoriteBtnClick = jest.fn();

  const placeCard = Enzyme.shallow(
      <PlaceCard
        offer={offer}
        parentNode={ParentNode.MAIN}
        userAuth={userAuth}
        onCardHeadingLinkClick={onCardHeadingLinkClick}
        onNearbyFavoriteClickBtn={onNearbyFavoriteClickBtn}
        onPlaceCardHover={onPlaceCardHover}
        onFavoriteBtnClick={onFavoriteBtnClick}
      />
  );

  const favoriteBtn = placeCard.find(`.place-card__bookmark-button`);

  favoriteBtn.simulate(`click`);

  expect(onFavoriteBtnClick).toBeCalledWith(offer.id, offer.is_favorite);
});
