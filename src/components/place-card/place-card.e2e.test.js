import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
        img: expect.any(Array),
        price: expect.any(Number),
        rating: expect.any(Number),
        type: expect.any(String),
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
