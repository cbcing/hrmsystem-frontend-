/*
  可以将reducer理解为前端的业务逻辑：即网页上发生了某个动作（如点击）后，我们的前端如何去处理它。
  reducer处理后应该将变化后的state存入store，后续的事情由store接力去完成。
*/

import { combineReducers } from 'redux'


//处理二维码相关action的reducers
//state是发生一个动作时当前store的状态，会由redux传入，以便我们可根据状态进行业务处理。
//action则是当前系统发生的事件(event)，一般由前台控件生成，由redux通知我们(reducers)，
//通常我们还会在action中附带数据以便reducer处理
const qrcodes = (state={}, action) => {
	console.log('Qrcode Reducer called with state', state, ' and action:', action);
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				item: action.item
			}
		case 'LIST_ITEM':
			return {
				...state,
				item: action.item
			}
		default:
			return state;
	}
}

//一个测试的reducer
const userReducer = (state={}, action) => {
	console.log('userReducer was called with state', state, ' and action:', action)
	switch (action.type) {
		case 'SET_NAME':
			return {
				...state,
				message: action.name
			}
		default:
			return state;
	}
}

const rootReducers = combineReducers({
	qrcodes, 
	userReducer
})

export default rootReducers