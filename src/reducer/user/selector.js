import NameSpace from "../name-space.js";

export const getAuthorizationStatus = (state) => (state[NameSpace.USER].authorizationStatus);
export const getUserInfo = (state) => (state[NameSpace.USER].authInfo);
