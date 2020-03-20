import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item.jsx';

const ReviewsList = ({comments}) => (
  <ul className="reviews__list">
    {comments.map((comment) => (
      <ReviewsItem
        review={comment}
        key={comment.id}
      />
    ))}
  </ul>
);

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.exact({
    'id': PropTypes.number.isRequired,
    'user': PropTypes.exact({
      'id': PropTypes.number,
      'is_pro': PropTypes.bool,
      'name': PropTypes.string,
      'avatar_url': PropTypes.string,
    }),
    'rating': PropTypes.number,
    'comment': PropTypes.string,
    'date': PropTypes.string,
  })),
};

export default ReviewsList;
