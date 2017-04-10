import React from 'react'
import { Control, Form, actions } from 'react-redux-form'

class UserForm extends React.Component {
	handleSubmit(user) {
		console.log('handleSubmit', user)
	}

	render() {
		return (
			<Form model="user"
				onSubmit={(user) => this.handleSubmit(user)}>
				<label>用户姓名：</label>
				<Control.text model="user.username"/>

				<label>邮箱：</label>
				<Control.text model="user.email"/>

				<button type="submit">
					保 存
				</button>
			</Form>
		)
	}
}

export default UserForm