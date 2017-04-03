/*
  可以将reducer理解为前端的业务逻辑：即网页上发生了某个动作（如点击）后，我们的前端如何去处理它。
  reducer处理后应该将变化后的state存入store，后续的事情由store接力去完成。
*/

import { combineReducers } from 'redux'
import qrcodes from './qrcodes'
import { reducer as notificationsReducer } from 'reapop'

//一个测试的reducer
const userReducer = (state={}, action) => {
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
	notifications: notificationsReducer(),
	qrcodes, 
	userReducer
})

export default rootReducers