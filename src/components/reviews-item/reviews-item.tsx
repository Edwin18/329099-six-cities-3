import * as React from 'react';
import {getCorrectRatingNumber, setDateTime, setDate} from '../../utils';
import {Review} from '../../types';

type Props = {
  review: Review;
}

const ReviewsItem: React.FC<Props> = ({review}) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.avatar_url} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {review.user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${getCorrectRatingNumber(review.rating)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.comment}
      </p>
      <time className="reviews__time" dateTime={setDateTime(review.date)}>{setDate(review.date)}</time>
    </div>
  </li>
);

export default ReviewsItem;
