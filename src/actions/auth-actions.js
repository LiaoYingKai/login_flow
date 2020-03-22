import {
	START_CHECK_AUTH,
	CHECK_AUTH_SUCCESS,
	CHECK_AUTH_FAILED,
} from './action-type';

export function checkAuth() {
	return {
		type: START_CHECK_AUTH,
	};
}

export function checkAuthSuccess(check) {
	return {
		type: CHECK_AUTH_SUCCESS,
		check,
	};
}

export function checkAuthFailed() {
	return {
		type: CHECK_AUTH_FAILED,
	};
}
