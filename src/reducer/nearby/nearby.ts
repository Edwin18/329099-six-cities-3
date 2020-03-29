import {extend} from '../../utils';
import {NearbyStore} from '../../types';

const initialState: NearbyStore = {
  nearby: [],
};

const ActionType = {
  LOAD_NEARBY: `LOAD_NEARBY`,
};

const ActionCreator = {
  loadNearby: (nearby) => ({
    type: ActionType.LOAD_NEARBY,
    payload: nearby,
  }),
};

const Operation = {
  loadNearby: (hotelId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${hotelId}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearby(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEARBY:
      return extend(state, {
        nearby: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
