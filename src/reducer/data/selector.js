import {createSelector} from 'reselect';
import NameSpace from "../name-space.js";
import {SortType} from '../../const.js';

const getOffers = (state) => (state[NameSpace.DATA].offers);
const getCity = (state) => (state[NameSpace.CITIES].activeCity);
const getSort = (state) => (state[NameSpace.CITIES].activeSort);

export const getCurrentOffers = createSelector(
    getCity,
    getSort,
    getOffers,
    (city, sort, offers) => {
      const result = offers.filter((it) => (it.city.name === city));
      switch (sort) {
        case SortType.DEFAULT:
          return result;
        case SortType.TO_HIGH:
          return (
            result.slice().sort((a, b) => (b.price - a.price))
          );
        case SortType.TO_LOW:
          return (
            result.slice().sort((a, b) => (a.price - b.price))
          );
        case SortType.TOP_RATED:
          return (
            result.slice().sort((a, b) => (b.rating - a.rating))
          );
      }
      return result;
    }
);