import NameSpace from '../name-space';
import history from '../../history';

const NAME_SPACE = NameSpace.CITIES;

export const getCities = (state) => (state[NAME_SPACE].cities);
export const getActiveCity = (state) => (state[NAME_SPACE].activeCity);
export const getCurrentOffer = (state, ownProps) => {
  const currentId = parseInt(ownProps.match.params.id, 10);
  const result = state[NameSpace.DATA].offers.find(({id}) => id === currentId);

  if (result === undefined) {
    history.push(`/not-exist`);
  }

  return result;
};
export const getActiveSort = (state) => (state[NAME_SPACE].activeSort);
