/*Redux的Action定义。
 其实Action仅仅是普通的JS对象，它就像是一个标志，本身并不具备功能，
 Action的功能其实是由Reducer决定的。
 就这一点而言，它很像Java中的Annotation的作用，感觉非常简洁、神奇，
 但本身仅仅是一个标志而已，若没有其它部分的配合它什么功能都没有。
*/
import * as types from './action-types'

export const saveQrcode = (qrcode) => ({
	type: types.QRCODE_REQUEST,
	data: qrcode
})