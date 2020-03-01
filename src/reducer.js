import {getOffersList, extend} from './utils.js';
import {CITIES} from './const.js';

const DEFAULT_CITY = `Amsterdam`;

const initialState = {
  cities: CITIES,
  activeCity: DEFAULT_CITY,
  currentOffers: getOffersList(DEFAULT_CITY),
  currentOffer: null,
  hoveredOffer: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFERS: `CHANGE_OFFERS`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  HOVERED_OFFER: `HOVERED_OFFER`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeOffers: (city) => ({
    type: ActionType.CHANGE_OFFERS,
    payload: getOffersList(city),
  }),
  changeOffer: (offer) => ({
    type: ActionType.CHANGE_OFFER,
    payload: offer,
  }),
  hoveredOffer: (offer) => ({
    type: ActionType.HOVERED_OFFER,
    payload: offer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.CHANGE_OFFERS:
      return extend(state, {
        currentOffers: action.payload,
      });
    case ActionType.CHANGE_OFFER:
      return extend(state, {
        currentOffer: action.payload,
        hoveredOffer: null,
      });
    case ActionType.HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
