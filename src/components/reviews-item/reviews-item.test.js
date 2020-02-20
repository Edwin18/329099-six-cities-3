import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item.jsx';

const review = {
  id: 1,
  name: `Max`,
  rating: 80,
  img: `img/avatar-max.jpg`,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: {
    dateTime: `2019-04-24`,
    dateM: `April 2019`,
  },
};

it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<ReviewsItem
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
