import {reducer, ActionCreator, ActionType} from './cities';

const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const initialState = {
  cities: CITIES,
  activeCity: CITIES[0],
  currentOffer: null,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initialState, {})).toEqual(initialState);
});

it(`Reducer should change city`, () => {
  expect(reducer({
    cities: 0,
    activeCity: 0,
    currentOffer: null,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: 100,
  })).toEqual({
    cities: 0,
    activeCity: 100,
    currentOffer: null,
  });
});

it(`Reducer should change offer`, () => {
  expect(reducer({
    cities: 0,
    activeCity: 0,
    currentOffer: null,
  }, {
    type: ActionType.CHANGE_OFFER,
    payload: 1,
  })).toEqual({
    cities: 0,
    activeCity: 0,
    currentOffer: 1,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(1)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: 1,
    });
  });

  it(`Action creator for change offer returns correct action`, () => {
    expect(ActionCreator.changeOffer(1)).toEqual({
      type: ActionType.CHANGE_OFFER,
      payload: 1,
    });
  });
});
