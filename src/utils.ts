import * as moment from 'moment';
import {ApartamentType} from './const';
import {Offer} from './types';

const RATING_MULTIPLIER: number = 20;

export const getCoordinates = (offers: Array<Offer>): Array<Array<number>> => (
  offers.map((elem) => (
    [
      elem.location.latitude,
      elem.location.longitude,
    ]
  ))
);
export const getCorrectRatingNumber = (rating: number): number => (Math.round(rating) * RATING_MULTIPLIER);
export const getCorrectTypeOfApartment = (type: string): string => (ApartamentType[type]);
export const extend = (a, b) => (
  Object.assign({}, a, b)
);
export const setDateTime = (date: string) => (moment(date).format(`YYYY-MM-DD`));
export const setDate = (date: string) => (moment(date).format(`MMMM YYYY`));
export const getCorrectFavorites = (favorites: Array<Offer>): Array<Array<Offer>> => {
  const sortedFavoritesByFilter = [];
  let preResult = [];

  for (const point of favorites) {
    const first = point;
    const result = favorites.filter((elem) => (first.city.name === elem.city.name));

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
