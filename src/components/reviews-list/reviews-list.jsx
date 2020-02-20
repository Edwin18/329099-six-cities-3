import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item.jsx';

const ReviewsList = ({reviews}) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewsItem
        review={review}
        key={review.text + review.rating}
      />
    ))}
  </ul>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.exact({
      dateTime: PropTypes.string.isRequired,
      dateM: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default ReviewsList;
