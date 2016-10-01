import { handleActions } from 'redux-actions';
import withFetching from './withFetching';

import {
	REQUEST_ADVERTS,
	RECEIVE_ADVERTS
} from '../constants/actions';

const initialState = {
	name: null,
	rep: null,
	data: {}
};

const adverts = handleActions ({
	[RECEIVE_ADVERTS]: (state, action) => {
		console.log('hola');
		return {
			...state,
			name: action.name,
			rep: action.rep,
			data: action.data
		};
	}
}, initialState);

const advertsWithFetching = withFetching(REQUEST_ADVERTS, RECEIVE_ADVERTS, adverts);

export default advertsWithFetching;
