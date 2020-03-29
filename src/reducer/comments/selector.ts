import * as moment from 'moment';
import NameSpace from '../name-space';

const MAX_COMMENTS_COUNT = 10;

export const getCurrentComments = (state) => (
  state[NameSpace.COMMENTS].currentComments.sort((a, b) => (moment(b.date).valueOf() - moment(a.date).valueOf())).slice(0, MAX_COMMENTS_COUNT)
);
