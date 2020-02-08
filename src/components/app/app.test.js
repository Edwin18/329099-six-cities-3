import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const places = [`Place A`, `Place B`, `Place C`];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      available={50}
      places={places}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
