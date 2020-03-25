import {extend} from '../../utils.js';

const initialState = {
  offers: [],
  favorite: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_FAVORITE: `LOAD_FAVORITE`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`,
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadFavorite: (offers) => ({
    type: ActionType.LOAD_FAVORITE,
    payload: offers,
  }),
  toggleFavorite: (offer) => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload: offer,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  loadFavorite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorite(response.data));
      });
  },
  toggleFavorite: (id, isFavorite) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${isFavorite ? 0 : 1}`)
      .then((response) => {
        dispatch(ActionCreator.toggleFavorite(response.data));
        dispatch(Operation.loadFavorite());
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favorite: action.payload,
      });
    case ActionType.TOGGLE_FAVORITE:
      const updatedOffers = state.offers.map((offer) => {
        return offer.id === action.payload.id ? action.payload : offer;
      });

      return extend(state, {
        offers: updatedOffers,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
