import { Map, List } from 'immutable';
import {
	ADD_TODO,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAIL,
} from '../../actions/action-type';
import { LoadingStatusEnums } from '../../lib/enums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = Map({
	data: List(),
	loadingStatus: NONE,
	errorMessage: '',
});

export default function todo(state = initState, action) {
	switch (action.type) {
		case ADD_TODO: {
			return state.set('loadingStatus', LOADING);
		}
		case ADD_TODO_SUCCESS: {
			const array = state.get('data').toArray();
			const newAeeay = [...array, action.todo];

			return state
				.set('data', List(newAeeay))
				.set('loadingStatus', SUCCESS);
		}
		case ADD_TODO_FAIL: {
			return state
				.set('errorMessage', action.error)
				.set('loadingStatus', FAILED);
		}
		default: {
			return state;
		}
	}
}