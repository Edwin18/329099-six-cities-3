import reviews from './mocks/reviews.js';
import neighbourhood from './mocks/neighbourhood.js';

export const getReviewsList = (id) => (reviews.filter((elem) => (elem.id === id)));
export const getNeighbourhoodList = (id) => (neighbourhood.filter((elem) => (elem.id === id)));
export const getCoordinates = (offers) => {
  const result = [];

  offers.forEach((elem) => (result.push(elem.cords)));

  return result;
};
