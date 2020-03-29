import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionCreator, ActionType, Operation} from './user';

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};
const LoginInfo = {
  login: `WTF!?`,
  password: `i dont know...`,
};

const api = createAPI();

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
};

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it(`Reducer should check auth`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authInfo: null,
    }, {
      type: ActionType.USER_AUTH,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      authInfo: null,
    });
  });

  it(`Reducer should login user`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authInfo: null,
    }, {
      type: ActionType.USER_LOGIN_INFO,
      payload: LoginInfo
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authInfo: LoginInfo,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for iser auth returns correct action`, () => {
    expect(ActionCreator.userAuth(1)).toEqual({
      type: ActionType.USER_AUTH,
      payload: 1,
    });
  });

  it(`Action creator for user login returns correct action`, () => {
    expect(ActionCreator.userLoginInfo(1)).toEqual({
      type: ActionType.USER_LOGIN_INFO,
      payload: 1,
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authLoader = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return authLoader(dispatch, () => ({}), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.USER_LOGIN_INFO,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.USER_AUTH,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsPost = Operation.login(LoginInfo);

    apiMock
      .onPost(`/login`, {
        email: LoginInfo.login,
        password: LoginInfo.password,
      })
      .reply(200, [{fake: true}]);

    return commentsPost(dispatch, () => ({}), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.USER_LOGIN_INFO,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.USER_AUTH,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
});
