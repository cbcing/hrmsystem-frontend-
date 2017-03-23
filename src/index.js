import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'

// const store = createStore(
// 	combineReducers({userReducer, qrcodes})
// )
const store = configureStore()

var setNameActionCreator = function(name) {
	return {
		type: 'SET_NAME',
		name: name
	}
}
// store.dispatch(setNameActionCreator('Bob'))
console.log(store.getState())

//Provider连接了store与组件，以便让组件可以访问store的状态state
ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={hashHistory} />
	</Provider>, 
	document.getElementById('root')
);
