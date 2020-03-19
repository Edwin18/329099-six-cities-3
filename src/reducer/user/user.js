import {extend} from '../../utils.js';
import {AuthorizationStatus} from '../../const.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
};

const ActionType = {
  USER_AUTH: `USER_AUTH`,
  USER_LOGIN_INFO: `USER_LOGIN_INFO`,
};

const ActionCreator = {
  userAuth: (user) => ({
    type: ActionType.USER_AUTH,
    payload: user,
  }),
  userLoginInfo: (userInfo) => ({
    type: ActionType.USER_LOGIN_INFO,
    payload: userInfo,
  }),
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.userAuth(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((AuthInfo) => {
        dispatch(ActionCreator.userLoginInfo(AuthInfo.data));
      })
      .then(() => {
        dispatch(ActionCreator.userAuth(AuthorizationStatus.AUTH));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_AUTH:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.USER_LOGIN_INFO:
      return extend(state, {
        authInfo: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
