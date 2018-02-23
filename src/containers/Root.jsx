import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import '../assets/styles/App.css';
import Test from "./Test";
import Test2 from "./Test2";
export default class Root extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Test} />
					<Route exact path="/test" component={Test2} />
				</Switch>
			</div>
		);
	}
}
