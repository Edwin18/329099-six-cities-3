import React from 'react';
import renderer from 'react-test-renderer';
import {LocationsList} from './locations-list.jsx';

const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

it(`Render LocationsList`, () => {
  const tree = renderer
    .create(<LocationsList
      cities={CITIES}
      activeCity={CITIES[0]}
      onCityLinkClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
