/*
Redux的store，用于存储应用的状态state。
此文件参考了redux官网代码examples/real-world/src/store/configureStore.prod.js
*/
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BlockUiMiddleware } from 'react-block-ui/redux'
import rootReducer from '../reducers'

//1. createStore的核心参数是reducer，即我们的状态处理逻辑。
//   这里我们传入一个rootReducer，它定义在另一个专门的文件中，以便让代码结构更清晰。
//2. thunk是一个中间件，它让我们可以编写异步的action，否则默认action全部是同步的，
//   而访问后台REST API之类的事情全是异步的，所以thunk是必须的。
//   applyMiddleware仅仅是redux提供的一个小工具函数，帮我们向redux注入中间件。
//   BlockUiMiddleware是提供网页等待效果的一个库要求的中间件。
const middleware = [thunk, BlockUiMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => createStore(
	rootReducer,
	preloadedState,
	composeEnhancers(
		applyMiddleware(...middleware)
))

export default configureStore