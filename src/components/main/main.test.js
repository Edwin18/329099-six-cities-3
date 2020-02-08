import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const places = [`Place A`, `Place B`, `Place C`];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      available={30}
      places={places}
      onHeadingLinkClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
