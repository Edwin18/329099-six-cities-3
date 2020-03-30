import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Comments from './comments';

const hotelId = 10;
const COMMENT = {
  comment: `Some text`,
  rating: 1,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user submit comment`, () => {
  const onSubmit = jest.fn();

  const comments = Enzyme.mount(
      <Comments
        onSubmit={onSubmit}
        hotelId={hotelId}
      />
  );

  const commentElement = comments.find(`#review`).getDOMNode<HTMLInputElement>();
  const ratingElement = comments.find(`#one-star`).getDOMNode<HTMLInputElement>();
  const btnElement = comments.find(`.reviews__submit`);

  commentElement.value = COMMENT.comment;
  ratingElement.checked = true;
  comments.simulate(`submit`);

  expect(onSubmit).toBeCalledWith(hotelId, COMMENT, comments.getDOMNode(), btnElement.getDOMNode());
});
