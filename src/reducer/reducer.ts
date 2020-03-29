import {combineReducers} from 'redux';
import {reducer as data} from './data/data';
import {reducer as cities} from './cities/cities';
import {reducer as user} from './user/user';
import {reducer as comments} from './comments/comments';
import {reducer as nearby} from './nearby/nearby';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CITIES]: cities,
  [NameSpace.USER]: user,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.NEARBY]: nearby,
});

