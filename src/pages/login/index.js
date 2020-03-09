import React, { Component, } from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import './style.scss';

class Login extends Component {
	render() {
		return (
			<div className="login">
				<div className="login__content">
					<div className="login__content-title">Sign In</div>
					<Button type={Button.TypeEnums.BUTTON}>Login</Button>
					<div>
						<Button type={Button.TypeEnums.TEXT}>Forget Password?</Button>
					</div>
				</div>
				<div className="login__prompt">
					Dont have a account?
					<Button type={Button.TypeEnums.TEXT}>DEGISTER HERE</Button>
				</div>
				<Icon/>
				<Icon type={Icon.TypeEnums.SOLID_USER} size={Icon.SizeEnums.MEDIUM} color={Icon.ColorEnums.GRAY}/>
				<Icon type={Icon.TypeEnums.SOLID_LOCK} size={Icon.SizeEnums.MEDIUM} color={Icon.ColorEnums.GRAY}/>
			</div>
		);
	}
}

export default Login;
