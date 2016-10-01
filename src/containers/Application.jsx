import React from 'react';
import ReactDOM from 'react-dom';
import * as reducers from '../reducers';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { ReduxRouter, routerStateReducer, reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';

const logger = createLogger({
	duration: true
});

const reducer = combineReducers({
	router: routerStateReducer,
	...reducers
});

const store = compose(
	applyMiddleware(logger, thunkMiddleware),
	reduxReactRouter({
		routes,
		createHistory
	})
)(createStore)(reducer);

//Maybe It'll be better to put this part into another file?
import { Router, Route, hashHistory } from 'react-router';
import Application from '../components/application';
import Landing from './Landing';
import { dispatch } from 'redux';
import { fetchAdverts } from '../actions/adverts';

function handleEnter(store, router) {
	console.log('enter');
	store.dispatch(fetchAdverts(router.params.name));
}

const routes = (
	<Router history={hashHistory}>
		<Route component={Application}>
			<Route path="/" component={Landing} onEnter={(router) => handleEnter(store, router)} />
		</Route>
	</Router>
);
// END
let element = <ReduxRouter routes={routes} />

export default () => {
	return (
		<Provider store={store}>
			{element}
		</Provider>
	);
}
