import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import '../assets/styles/App.scss';
import store, { history } from '../store';
import Root from "./Root";

export default class App extends Component {
  render() {
    return (
      <AppContainer>
				<Provider store={store}>
					<Router history={history}>
						<Root />
					</Router>
				</Provider>
      </AppContainer>
    );
  }
}
