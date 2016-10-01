import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Application from './components/application';
import Landing from './containers/landing';
import Person from './containers/person';
import { dispatch } from 'redux';
import { fetchPerson } from './actions/person';

export default (store) => {
	return (
		<Router history={hashHistory}>
			<Route component={Application}>
				<Route path="/" component={ Landing } />
			</Route>
		</Router>
	)
};
