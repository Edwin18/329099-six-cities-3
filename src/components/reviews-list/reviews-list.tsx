import * as React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {Review} from '../../types';

type Props = {
  comments: Array<Review>;
}

const ReviewsList: React.FC<Props> = ({comments}) => (
  <ul className="reviews__list">
    {comments.map((comment) => (
      <ReviewsItem
        review={comment}
        key={comment.id}
      />
    ))}
  </ul>
);

export default ReviewsList;
