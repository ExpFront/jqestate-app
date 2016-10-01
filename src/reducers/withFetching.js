import { handleActions } from 'redux-actions';

const withFetching = (actionRequest, actionResponse, reducer) => {

	const initialState = {
		...reducer(undefined, {}),
		isFetching: false,
	};

	return handleActions({
		[actionRequest]: (state, action) => {
			return {
				...reducer(state, action),
				isFetching: true
			};
		},

		[actionResponse]: (state, action) => {
			return {
				...reducer(state, action),
				isFetching: false
			};
		}
	}, initialState);
}

export default withFetching;
