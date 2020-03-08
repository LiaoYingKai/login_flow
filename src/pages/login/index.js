import React, { Component, } from 'react';
import './style.scss';

class Login extends Component {
	render() {
		return (
			<div className="login">
				<div className="login__content">
					<div className="login__content-title">Sign In</div>
					
				</div>
				<div className="login__prompt">
					Dont have a account? DEGISTER HERE
				</div>
			</div>
		);
	}
}

export default Login;
