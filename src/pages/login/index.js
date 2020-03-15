import React, { useState } from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import './style.scss';

const {
	TypeEnums,
	SizeEnums,
	ColorEnums,
} = Icon;

const { MEDIUM } = SizeEnums;
const { GRAY } = ColorEnums;
const {
	SOLID_USER,
	REGULAR_USER,
	SOLID_LOCK,
} = TypeEnums;

function Login() {
	const [ account, setAccount ] = useState('');
	const [ accountErrorText, setAccountErrorText ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordErrorText, setPasswordErrorText ] = useState('');
	const [ isRemember, setIsRemember ] = useState(false);

	function _handleChangeAccount(event) {
		const value = event.target.value;

		setAccount(value);
		setAccountErrorText(_handleVerification(value, '帳號'));
	}

	function _handleChangePassword(event) {
		const value = event.target.value;

		setPassword(value);
		setPasswordErrorText(_handleVerification(value, '密碼'));
	}

	function _handleVerification(value, text) {
		const hasNumber = /\d+/;
		const hasLetter = /[a-zA-z]+/;

		if (value.length < 6) { 
			return `${text}最短要 6 個字`;
		} else if (value.length > 20) {
			return `${text}最多 20 個字`;
		} else if (!(hasNumber.test(value) && hasLetter.test(value))) {
			return `${text}至少一個英文與一個數字`;
		} else {
			return '';
		}
	}

	return (
		<div className="login">
			<div className="login__content">
				<div className="login__logo">
					<Icon type={REGULAR_USER}/>
				</div>
				<div className="login__content-title">Sign In</div>
				<Input
					prefixItem={<Icon size={MEDIUM} type={SOLID_USER} color={GRAY} />}
					value={account}
					onChange={_handleChangeAccount}
					errorText={accountErrorText}
				/>
				<Input
					prefixItem={<Icon size={MEDIUM} type={SOLID_LOCK} color={GRAY} />}
					type='password'
					value={password}
					onChange={_handleChangePassword}
					errorText={passwordErrorText}
				/>
				<Button type={Button.TypeEnums.BUTTON}>Login</Button>
				<div className="login__bottom">
					<div>
						<Checkbox
							onChange={(event) => {setIsRemember({ value: event.target.value });}}
							value={isRemember}
						/>
						Remember Me
					</div>
					<Button type={Button.TypeEnums.TEXT}>Forget Password?</Button>
				</div>
			</div>
			<div className="login__prompt">
				Dont have a account?
				<Button type={Button.TypeEnums.TEXT}>DEGISTER HERE</Button>
			</div>
		</div>
	);
}

export default Login;
