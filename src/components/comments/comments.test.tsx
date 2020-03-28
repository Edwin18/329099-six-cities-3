import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Comments from './comments';

const hotelId = 1;

it(`Render <Comments />`, () => {
  const tree = renderer
    .create(<Comments
      onSubmit={() => {}}
      hotelId={hotelId}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
