import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import '../assets/styles/App.scss';
import store, { history } from '../store';
import Routes from "./Routes";

export default class App extends Component {
  render() {
    return (
      <AppContainer>
				<Provider store={store}>
					<ConnectedRouter history={history}>
						<Routes />
					</ConnectedRouter>
				</Provider>
      </AppContainer>
    );
  }
}
