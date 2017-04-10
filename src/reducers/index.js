/*
  可以将reducer理解为前端的业务逻辑：即网页上发生了某个动作（如点击）后，我们的前端如何去处理它。
  reducer处理后应该将变化后的state存入store，后续的事情由store接力去完成。
*/

import { combineReducers } from 'redux'
import qrcodes from './qrcodes'
//弹窗库
import { reducer as notificationsReducer } from 'reapop'
//redux表单库
import { combineForms } from 'react-redux-form'

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

//修改用户页面的初始数据
const initialUser = {
	email: '',
	username: '',
}

// const rootReducers = combineReducers({
// 	notifications: notificationsReducer(),
// 	rrf: combineForms({
// 		user: initialUser
// 	}, 'rrf'),
// 	qrcodes, 
// 	userReducer,
// })
const rootReducers = combineForms({
	notifications: notificationsReducer(),
	user: initialUser,
	qrcodes, 
	userReducer,
})

export default rootReducers