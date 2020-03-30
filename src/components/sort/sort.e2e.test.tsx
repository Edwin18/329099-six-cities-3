import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Sort} from './sort';
import {SORTS} from '../../const';

const activeSort = `popular`;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user change sort types`, () => {
  const onSortItemClick = jest.fn();
  const onSortClick = jest.fn();

  const sort = Enzyme.mount(
      <Sort
        activeSort={activeSort}
        onSortItemClick={onSortItemClick}
        onSortClick={onSortClick}
        isOpened={true}
      />
  );

  const sortElements = sort.find(`.places__option`);

  sortElements.forEach((elem, i) => {
    elem.simulate(`click`);
    expect(onSortItemClick).toBeCalledWith(SORTS[i].type);
  });

  expect(onSortClick).toBeCalledTimes(SORTS.length);
});
