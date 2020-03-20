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
