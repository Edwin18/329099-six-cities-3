import moment from 'moment';
import {ApartamentType} from './const.js';

const RATING_MULTIPLIER = 20;

export const getCoordinates = (offersList) => (
  offersList.map((elem) => (
    [
      elem.location.latitude,
      elem.location.longitude,
    ]
  ))
);
export const getCorrectRatingNumber = (rating) => (Math.round(rating) * RATING_MULTIPLIER);
export const getCorrectTypeOfApartments = (type) => (ApartamentType[type]);
export const extend = (a, b) => (
  Object.assign({}, a, b)
);
export const setDateTime = (date) => (moment(date).format(`YYYY-MM-DD`));
export const setDate = (date) => (moment(date).format(`MMMM YYYY`));
export const getCorrectFavorites = (favorite) => {
  const sortedFavoritesByFilter = [];
  let preResult = [];

  for (const point of favorite) {
    const first = point;
    const result = favorite.filter((elem) => (first.city.name === elem.city.name));

    if (sortedFavoritesByFilter.length === 0) {
      sortedFavoritesByFilter.push(result);
      preResult = result;
    } else {
      if (preResult[0].city.name !== result[0].city.name) {
        sortedFavoritesByFilter.push(result);
        preResult = result;
      }
    }
  }

  return sortedFavoritesByFilter;
};
