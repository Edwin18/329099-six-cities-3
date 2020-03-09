import React from 'react';
import renderer from 'react-test-renderer';
import CitiesEmpty from './cities-empty.jsx';

const activeCity = `Paris`;

it(`Render CitiesEmpty`, () => {
  const tree = renderer
    .create(<CitiesEmpty
      activeCity={activeCity}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
