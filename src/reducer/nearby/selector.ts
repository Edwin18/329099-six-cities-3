import NameSpace from '../name-space';

const MAX_NEARBY_COUNT = 3;

export const getNearby = (state) => (state[NameSpace.NEARBY].nearby.slice(0, MAX_NEARBY_COUNT));
