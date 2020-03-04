import {extend} from './utils.js';
import {CITIES} from './const.js';

const initialState = {
  cities: CITIES,
  activeCity: CITIES[0],
  currentOffer: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFER: `CHANGE_OFFER`,
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
