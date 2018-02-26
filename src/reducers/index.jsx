import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import testReducers from "./test";

export default combineReducers({
	router: routerReducer,
	test: testReducers
});
