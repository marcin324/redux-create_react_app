import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import { addComment } from './actions.js';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(addComment('Pierwszy komentarz.'));
store.dispatch(addComment('Drugi komentarz.'));
store.dispatch(addComment('Następny komentarz.'));