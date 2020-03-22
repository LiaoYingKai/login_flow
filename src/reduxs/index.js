import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import auth from './reducer/auth';

export const rootEpic = combineEpics(
);

export const rootReducer = combineReducers({
	auth,
});
