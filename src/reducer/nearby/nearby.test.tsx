import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionCreator, ActionType, Operation} from './nearby';

const hotelId = 1;

const api = createAPI();

const initialState = {
  nearby: [],
};

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it(`Reducer should load nearby`, () => {
    expect(reducer({
      nearby: [],
    }, {
      type: ActionType.LOAD_NEARBY,
      payload: [1, 2, 3],
    })).toEqual({
      nearby: [1, 2, 3],
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load nearby returns correct action`, () => {
    expect(ActionCreator.loadNearby(1)).toEqual({
      type: ActionType.LOAD_NEARBY,
      payload: 1,
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels/${hotelId}/nearby`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyLoader = Operation.loadNearby(hotelId);

    apiMock
      .onGet(`/hotels/${hotelId}/nearby`)
      .reply(200, [{fake: true}]);

    return nearbyLoader(dispatch, () => ({}), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY,
          payload: [{fake: true}],
        });
      });
  });
});
