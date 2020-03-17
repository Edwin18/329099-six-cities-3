import {extend} from '../../utils.js';
import {CITIES, SortType} from '../../const.js';

const initialState = {
  cities: CITIES,
  activeCity: CITIES[0],
  activeSort: SortType.DEFAULT,
  currentOffer: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  CHANGE_SORT: `CHANGE_SORT`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeOffer: (offer) => ({
    type: ActionType.CHANGE_OFFER,
    payload: offer,
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.CHANGE_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });
    case ActionType.CHANGE_SORT:
      return extend(state, {
        activeSort: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
