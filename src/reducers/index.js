import { combineReducers } from 'redux';
// import { createSelector } from 'reselect';
import auth, * as fromAuth from './auth';

export default combineReducers({
  auth,
});

export const selectUserName = state => fromAuth.selectUserName(state.auth);

// use createSelector for selector memoization
