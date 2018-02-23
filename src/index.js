import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';

import './assets/styles/index.scss';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));

if (module.hot) {
	module.hot.accept('./containers/App', () => {
		render(<App />, document.getElementById('root'));
	});
}


registerServiceWorker();
