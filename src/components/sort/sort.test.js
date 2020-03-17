import React from 'react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';
import {Sort} from './sort.jsx';

const activeSort = `popular`;
const mockStore = configureStore([]);
const store = mockStore({
  CITIES: {
    activeSort,
  },
});

it(`Render Sort`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <Sort
        activeSort={activeSort}
        onSortItemClick={() => {}}
        onSortClick={() => {}}
        isOpened={true}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
