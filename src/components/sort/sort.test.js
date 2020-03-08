import React from 'react';
import renderer from 'react-test-renderer';
import Sort from './sort.jsx';

const activeSort = `popular`;

it(`Render Sort`, () => {
  const tree = renderer
    .create(<Sort
      activeSort={activeSort}
      onSortItemClick={() => {}}
      onSortClick={() => {}}
      isOpened={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
