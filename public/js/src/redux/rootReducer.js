import { combineReducers } from 'redux';
import semesters from './modules/semesters';
import statistics from './modules/statistics';

export default combineReducers({
  semesters,
  statistics,
});
