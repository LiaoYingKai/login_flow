import {
	ADD_TODO,
	ADD_TODO_SUCCESS,
	ADD_TODO_FAIL,
} from './action-type';

export function addTodo(todo) {
	return {
		type: ADD_TODO,
		todo,
	};
}

export function addTodoSuccess(todo) {
	return {
		type: ADD_TODO_SUCCESS,
		todo,
	};
}

export function addTodoFail(error) {
	return {
		type: ADD_TODO_FAIL,
		error,
	};
}
