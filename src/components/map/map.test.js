import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const coordinates = [
  [52.3709553943508, 4.89309666406198],
  [52.3709553943508, 4.89309666406198],
  [52.3709553943508, 4.89309666406198],
  [52.3709553943508, 4.89309666406198],
];

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map
      coordinates={coordinates}
    />, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
