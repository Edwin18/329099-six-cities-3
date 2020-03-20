import {combineReducers} from 'redux';
import {reducer as data} from './data/data.js';
import {reducer as cities} from './cities/cities.js';
import {reducer as user} from './user/user.js';
import {reducer as comments} from './comments/comments.js';
import {reducer as nearby} from './nearby/nearby.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CITIES]: cities,
  [NameSpace.USER]: user,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.NEARBY]: nearby,
});

