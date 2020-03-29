import {reducer, ActionCreator, ActionType} from './cities';

const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];
const SortType = {
  DEFAULT: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

const initialState = {
  cities: CITIES,
  activeCity: CITIES[0],
  activeSort: SortType.DEFAULT,
  currentOffer: null,
};
describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it(`Reducer should change city`, () => {
    expect(reducer({
      cities: CITIES,
      activeCity: CITIES[0],
      activeSort: SortType.DEFAULT,
      currentOffer: null,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: CITIES[1],
    })).toEqual({
      cities: CITIES,
      activeCity: CITIES[1],
      activeSort: SortType.DEFAULT,
      currentOffer: null,
    });
  });

  it(`Reducer should change sort type`, () => {
    expect(reducer({
      cities: CITIES,
      activeCity: CITIES[0],
      activeSort: SortType.DEFAULT,
      currentOffer: null,
    }, {
      type: ActionType.CHANGE_SORT,
      payload: SortType.TOP_RATED,
    })).toEqual({
      cities: CITIES,
      activeCity: CITIES[0],
      activeSort: SortType.TOP_RATED,
      currentOffer: null,
    });
  });

  it(`Reducer should change offer`, () => {
    expect(reducer({
      cities: CITIES,
      activeCity: CITIES[0],
      activeSort: SortType.DEFAULT,
      currentOffer: null,
    }, {
      type: ActionType.CHANGE_OFFER,
      payload: 1,
    })).toEqual({
      cities: CITIES,
      activeCity: CITIES[0],
      activeSort: SortType.DEFAULT,
      currentOffer: 1,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(1)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: 1,
    });
  });

  it(`Action creator for change sort returns correct action`, () => {
    expect(ActionCreator.changeSort(1)).toEqual({
      type: ActionType.CHANGE_SORT,
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
