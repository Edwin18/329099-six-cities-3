import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.CITIES;

export const getCities = (state) => (state[NAME_SPACE].cities);
export const getActiveCity = (state) => (state[NAME_SPACE].activeCity);
export const getCurrentOffer = (state) => (state[NAME_SPACE].currentOffer);
export const getActiveSort = (state) => (state[NAME_SPACE].activeSort);
