import { combineEpics } from 'redux-observable';
import { addTodo } from './epics/todo-epics';
import { combineReducers } from 'redux';
import todo from './reducer/todo';

export const rootEpic = combineEpics(
	addTodo,
);

export const rootReducer = combineReducers({
	todo
});
