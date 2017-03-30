/*Redux的Action定义。
 其实Action仅仅是普通的JS对象，它就像是一个标志，本身并不具备功能，
 Action的功能其实是由Reducer决定的。
 就这一点而言，它很像Java中的Annotation的作用，感觉非常简洁、神奇，
 但本身仅仅是一个标志而已，若没有其它部分的配合它什么功能都没有。
*/
import * as types from './action-types'

//定义若干个action
const addQrcodeSuccess = item => ({
	type: types.QRCODE_ADD_SUCCESS,
	item: item
})
const addQrcode = item => ({
	type: types.QRCODE_ADD,
	item: item
})
const fetchQrcodes = (limit) => ({
	type: types.QRCODE_FETCH_LIST,
	limit: limit
})
const fetchQrcodesSuccess = (items) => ({
	type: types.QRCODE_FETCH_LIST_SUCCESS,
	items: items
})
const loadQrcode = (item) => ({
	type: types.QRCODE_LOADED,
	item: item
})

//导出action creators，它们创建真正的action（或者说返回真正的action）
//这是一个异步的action creator，它会调用我们的API，当调用完成后才会dispatch action
// export const getAllQrcodes = () => dispatch => {
// 	qrcode.getItems(items => {
// 		dispatch(receiveQrcodes(items))
// 	})
// }


//真正的业务逻辑执行单元，完成几个任务：
//1.分发一个action表示已经开始访问后台，以便界面卡住；
//2.执行访问后台的代码（fetch)
//3.成功后分发action以便界面取消卡住状态并显示后台数据
export const addQrcodeCreator = (item) => dispatch => {
	dispatch(addQrcode(item))
	let options = { 
		method : 'POST',
    body : JSON.stringify(item),
  	headers: {
    	"Content-Type": "application/json"
  	}
  }

	return fetch("/api/QrCodes", options)
		.then(res => res.json())
		.then(data => {
			dispatch(addQrcodeSuccess(data))
		})
		.catch(e => console.log('访问后台出错了', e))
}

export const fetchQrcodesCreator = (limit) => (dispatch, getState) => {
	dispatch(fetchQrcodes(limit))

	return fetch("/api/QrCodes")
		.then(res => res.json())
		.then(data => {
			dispatch(fetchQrcodesSuccess(data))
		})
		.catch(e => console.log('获取二维码列表出错了', e))
}

export const loadQrcodesCreator = (id) => (dispatch, getState) => {
	const { qrcodes } = getState()
	let item = {}
	if (qrcodes.items) {
		item = qrcodes.items.find(it => {
			return it.id === id
		})
	}
	dispatch(loadQrcode(item))
}