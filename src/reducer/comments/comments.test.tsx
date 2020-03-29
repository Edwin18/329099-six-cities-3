import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionCreator, ActionType, Operation} from './comments';

const hotelId = 1;
const COMMENT = {
  comment: `Some text`,
  rating: 1,
};
const formElement = document.createElement(`form`);
const btnElement = document.createElement(`button`);

const api = createAPI();

const initialState = {
  currentComments: [],
};

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it(`Reducer should load comments`, () => {
    expect(reducer({
      currentComments: [],
    }, {
      type: ActionType.LOAD_COMMENTS,
      payload: [1, 2, 3],
    })).toEqual({
      currentComments: [1, 2, 3],
    });
  });

  it(`Reducer should post comments`, () => {
    expect(reducer({
      currentComments: [],
    }, {
      type: ActionType.POST_COMMENT,
      payload: [1, 2, 3],
    })).toEqual({
      currentComments: [1, 2, 3],
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load comments returns correct action`, () => {
    expect(ActionCreator.loadComments(1)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: 1,
    });
  });

  it(`Action creator for post comments returns correct action`, () => {
    expect(ActionCreator.postComment(1)).toEqual({
      type: ActionType.POST_COMMENT,
      payload: 1,
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /comments/${hotelId}`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadComments(hotelId);

    apiMock
      .onGet(`/comments/${hotelId}`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => ({}), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/${hotelId}`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsPost = Operation.postComment(hotelId, COMMENT, formElement, btnElement);

    apiMock
      .onPost(`/comments/${hotelId}`)
      .reply(200, [{fake: true}]);

    return commentsPost(dispatch, () => ({}), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_COMMENT,
          payload: [{fake: true}],
        });
      });
  });
});
