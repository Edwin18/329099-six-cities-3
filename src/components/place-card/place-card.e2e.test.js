import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should be pressed click on heading`, () => {
  const onHeadingLinkClick = jest.fn();
  const onPlaceCardHover = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onHeadingLinkClick={onHeadingLinkClick}
        onPlaceCardHover={onPlaceCardHover}
      />
  );

  const headingLink = placeCard.find(`h2.place-card__name a`);

  headingLink.simulate(`click`);

  expect(onHeadingLinkClick.mock.calls.length).toBe(1);
});

it(`When user hover on card nust be card "object"`, () => {
  const onHeadingLinkClick = jest.fn();
  const onPlaceCardHover = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onHeadingLinkClick={onHeadingLinkClick}
        onPlaceCardHover={onPlaceCardHover}
      />
  );

  placeCard.find(`article`).simulate(`mouseenter`);

  // expect(onPlaceCardHover.mock.calls[0][0]).toMatchObject(offer); // Типа первый вариант ниже второй, 2-й больше, но мне нравится он больше)

  expect(onPlaceCardHover).toBeCalledWith(
      expect.objectContaining({
        name: expect.any(String),
        img: expect.any(String),
        price: expect.any(Number),
        rating: expect.any(Number),
        type: expect.any(String),
        period: expect.any(String),
        premium: expect.any(Boolean)
      })
  );
});

it(`When user hover out from card must be "null"`, () => {
  const onHeadingLinkClick = jest.fn();
  const onPlaceCardHover = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onHeadingLinkClick={onHeadingLinkClick}
        onPlaceCardHover={onPlaceCardHover}
      />
  );

  placeCard.find(`article`).simulate(`mouseleave`);

  expect(onPlaceCardHover).toBeCalledWith(null);
});
