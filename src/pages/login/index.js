import React, { Component, } from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Checkbox from '../../components/Checkbox';
import './style.scss';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			value: false,
		};
	}
	render() {
		return (
			<div className="login">
				<div className="login__content">
					<div className="login__logo">
						<Icon/>
					</div>
					<div className="login__content-title">Sign In</div>
					<Button type={Button.TypeEnums.BUTTON}>Login</Button>
					<div>
						<Button type={Button.TypeEnums.TEXT}>Forget Password?</Button>
					</div>
					<Checkbox
						onChange={(event) => {this.setState({ value: event.target.value });}}
						value={this.state.value}
					/>
				</div>
				<div className="login__prompt">
					Dont have a account?
					<Button type={Button.TypeEnums.TEXT}>DEGISTER HERE</Button>
				</div>
			</div>
		);
	}
}

export default Login;
