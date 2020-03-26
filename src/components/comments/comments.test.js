import React from 'react';
import renderer from 'react-test-renderer';
import Comments from './comments.jsx';

const hotelId = 1;

it(`Render Comments`, () => {
  const tree = renderer
    .create(<Comments
      onSubmit={() => {}}
      hotelId={hotelId}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
