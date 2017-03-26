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

//导出action creators，它们创建真正的action（或者说返回真正的action）
//这是一个异步的action creator，它会调用我们的API，当调用完成后才会dispatch action
// export const getAllQrcodes = () => dispatch => {
// 	qrcode.getItems(items => {
// 		dispatch(receiveQrcodes(items))
// 	})
// }

export const saveQrcode = (item) => dispatch => {
	let url = '/api/QrCodes'
	let options = { 
		method : 'POST',
    body : JSON.stringify(item),
  	headers: {
    	"Content-Type": "application/json"
  	}
  }

	fetch(url, options)
		.then(res => res.json())
		.then(data => {
			dispatch(addQrcodeSuccess(data))
		})
		.catch(e => console.log('访问后台出错了', e))
}