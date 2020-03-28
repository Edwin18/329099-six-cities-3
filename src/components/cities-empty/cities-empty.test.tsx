import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CitiesEmpty from './cities-empty';

const activeCity = `Paris`;

it(`Render <CitiesEmpty />`, () => {
  const tree = renderer
    .create(<CitiesEmpty
      activeCity={activeCity}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
