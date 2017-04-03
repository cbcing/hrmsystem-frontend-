import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'

const store = configureStore()

//Provider连接了store与组件，以便让组件可以访问store的状态state
ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={hashHistory} />
	</Provider>, 
	document.getElementById('root')
);
