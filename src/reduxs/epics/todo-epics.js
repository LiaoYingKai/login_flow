import { ofType } from 'redux-observable';
import { of, } from 'rxjs';
import {
	map,
	catchError,
	mergeMap,
} from 'rxjs/operators';
import { ADD_TODO } from '../../actions/action-type';
import { addTodoSuccess, addTodoFail, } from '../../actions/todo-actions';

export function addTodo(action$) {
	return action$.pipe(
		ofType(ADD_TODO),
		mergeMap((action) => (
			of(action.todo)
		).pipe(
			map(todo => addTodoSuccess(todo)),
			catchError(payload => addTodoFail(payload.message))
		))
	);
}