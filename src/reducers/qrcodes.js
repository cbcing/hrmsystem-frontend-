import * as types from '../actions/action-types'

//处理二维码相关action的reducers
//state是发生一个动作时当前store的状态，会由redux传入，以便我们可根据状态进行业务处理。
//action则是当前系统发生的事件(event)，一般由前台控件生成，由redux通知我们(reducers)，
//通常我们还会在action中附带数据以便reducer处理
const qrcodes = (state={}, action) => {
	switch (action.type) {
		case types.QRCODE_ADD:
			return {
				...state,
				item: action.item
			}
		case types.QRCODE_ADD_SUCCESS:
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

export default qrcodes