import { handleActions } from 'redux-actions';

import {
	TOGGLE_TOOLTIP,
	SHOW_CONTENT
} from '../constants/actions';

const initialState = {
	tooltipIsActive: false,
	contentIsActive: false
};

export const landing = handleActions({
	[TOGGLE_TOOLTIP]: (state, action) => {
			return {
				...state,
				tooltipIsActive: action.flag
			};
	},

	[SHOW_CONTENT]: (state, action) => {
			return {
				...state,
				contentIsActive: true
			};
	}
}, initialState);
