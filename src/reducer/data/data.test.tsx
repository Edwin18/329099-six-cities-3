import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {reducer, ActionCreator, ActionType, Operation} from './data.js';

const api = createAPI(() => {});

const initialState = {
  offers: [],
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initialState, {})).toEqual(initialState);
});

it(`Reducer should change city`, () => {
  expect(reducer({
    offers: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: [1, 2, 3],
  })).toEqual({
    offers: [1, 2, 3],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.loadOffers(1)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: 1,
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
});
