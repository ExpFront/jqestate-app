import 'es6-promise';
import 'isomorphic-fetch';
import asJson from './asJson.js';

import {
	REQUEST_ADVERTS,
	RECEIVE_ADVERTS,
	FETCH_ADVERTS
} from '../constants/actions';

export const requestAdverts = () => {
	return {
		type: REQUEST_ADVERTS
	}
}

export const receiveAdverts = json => {
	return {
		type: RECEIVE_ADVERTS,
		data: json
	}
}

export const fetchAdverts = () => {
	return dispatch => {
		dispatch(requestAdverts())
		return fetch(`https://api.jqestate.ru/v1/properties/country`)
		.then(asJson)
		.then(json => {
			dispatch(receiveAdverts(json));
		})
	}
}
