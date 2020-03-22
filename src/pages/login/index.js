import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import MessageModal from '../../components/MessageModal';
import { withRouter } from 'react-router-dom';
import { routePaths } from '../../routes';
import './style.scss';

const propTypes = {
	history: PropTypes.object,
};
const {
	HOME,
} = routePaths;
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

function Login({
	history,
}) {
	const [ account, setAccount ] = useState('');
	const [ accountErrorText, setAccountErrorText ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordErrorText, setPasswordErrorText ] = useState('');
	const [ isRemember, setIsRemember ] = useState(false);
	const [ isVisable, setVisable ] = useState(false);
	const [ messageText, setMessageText ] = useState('');

	function _handleChangeAccount(event) {
		const value = event.target.value;

		setAccount(value);
		setAccountErrorText('');
	}

	function _handleChangePassword(event) {
		const value = event.target.value;

		setPassword(value);
		setPasswordErrorText('');
	}

	function _handleLogin() {
		if (!account) setAccountErrorText('帳號爲必填');

		if (!password) setPasswordErrorText('密碼爲必填');

		if (!account || !password) return;

		if (account !== 'test01') {
			setVisable(true);
			setMessageText('帳號輸入錯誤');
			return;
		}

		if (password !== '123qwe') {
			setVisable(true);
			setMessageText('密碼輸入錯誤');
			return;
		}

		history.push(HOME);
	}

	return (
		<div className="login">
			<div className="login__content">
				<div className="login__logo">
					<Icon type={REGULAR_USER}/>
				</div>
				<div className="login__content-title">Sign In</div>
				<form onSubmit={_handleLogin} className="login__form">
					<Input
						prefixItem={<Icon size={MEDIUM} type={SOLID_USER} color={GRAY} />}
						value={account}
						onChange={_handleChangeAccount}
						errorText={accountErrorText}
						className="account"
					/>
					<Input
						prefixItem={<Icon size={MEDIUM} type={SOLID_LOCK} color={GRAY} />}
						type='password'
						value={password}
						onChange={_handleChangePassword}
						errorText={passwordErrorText}
						className="password"
					/>
					<Button
						onClick={_handleLogin}
						type={Button.TypeEnums.BUTTON}
						className="submit-button"
					>Login</Button>
				</form>
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
			<MessageModal
				isVisible={isVisable}
				message={messageText}
				onClickOk={() => {setVisable(false);}}
			/>
		</div>
	);
}

Login.propTypes = propTypes;

export default withRouter(Login);
