import {
	START_CHECK_AUTH,
	CHECK_AUTH_SUCCESS,
	CHECK_AUTH_FAILED,
} from '../../actions/action-type';
import { LoadingStatusEnums } from '../../lib/enums';

const {
	NONE,
	SUCCESS,
	FAILED,
	LOADING,
} = LoadingStatusEnums;

const initState = {
	isAuth: false,

	loadingStatus: NONE,
	loadingStatusMessage: '',
};

export default function auth(state = initState, action) {
	switch (action.type) {
		case START_CHECK_AUTH: 
			return { ...state, ...{ loadingStatus: LOADING } };
		case CHECK_AUTH_SUCCESS:
			return { ...state, ...{ 
				loadingStatus: SUCCESS,
				isAuth: true,
			} };
		case CHECK_AUTH_FAILED:
			return { ...state, ...{
				loadingStatus: FAILED,
				isAuth: false,
				loadingStatusMessage: 'error'
			} };
		default:
			return state;
	}
}
