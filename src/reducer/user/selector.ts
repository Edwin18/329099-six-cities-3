import NameSpace from '../name-space';

export const getAuthorizationStatus = (state) => (state[NameSpace.USER].authorizationStatus);
export const getUserInfo = (state) => (state[NameSpace.USER].authInfo);
