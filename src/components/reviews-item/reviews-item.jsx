import React from 'react';
import PropTypes from 'prop-types';

const ReviewsItem = ({review}) => (
  <li className="reviews__item" key={review.text + review.rating}>
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.img} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {review.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${review.rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.text}
      </p>
      <time className="reviews__time" dateTime={review.date.dateTime}>{review.date.dateM}</time>
    </div>
  </li>
);

ReviewsItem.propTypes = {
  review: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.exact({
      dateTime: PropTypes.string.isRequired,
      dateM: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReviewsItem;
