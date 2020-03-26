import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';

const comments = [
  {
    'id': 1,
    'user': {
      'id': 4,
      'is_pro': false,
      'name': `Max`,
      'avatar_url': `img/avatar-max.jpg`
    },
    'rating': 5,
    'comment': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    'date': `2019-05-08T14:13:56.569Z`,
  },
  {
    'id': 2,
    'user': {
      'id': 5,
      'is_pro': false,
      'name': `Max`,
      'avatar_url': `img/avatar-max.jpg`
    },
    'rating': 1,
    'comment': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    'date': `2019-05-08T14:13:56.569Z`,
  },
];


it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<ReviewsList
      comments={comments}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
