import { ADD_ONE } from '../actions/test';

const testReducers = (state = { loading: false, data: 0 }, action) => {
	switch (action.type) {
		case `${ADD_ONE}`: {
			return { ...state, data: state.data + 1 };
		}
		default: {
			return state;
		}
	}
};

export default testReducers;
