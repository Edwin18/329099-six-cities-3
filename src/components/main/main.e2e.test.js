import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const places = [`Place A`, `Place B`, `Place C`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should be pressed click on heading`, () => {
  const onHeadingLinkClick = jest.fn();

  const mainPage = shallow(
      <Main
        available={30}
        places={places}
        onHeadingLinkClick={onHeadingLinkClick}
      />
  );

  const headingLink = mainPage.find(`h2.place-card__name a`);

  headingLink.forEach((it) => it.props().onClick());

  expect(onHeadingLinkClick.mock.calls.length).toBe(places.length);
});
