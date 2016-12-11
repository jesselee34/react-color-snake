import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import defaults from './defaults';

const store = createStore(reducers, defaults, window.devToolsExtension && window.devToolsExtension());
let frame = Object.assign({}, store.getState());

ReactDOM.render(
	<Provider store={store} >
		<App frame={frame} />
	</Provider>,
	document.getElementById('root')
);
