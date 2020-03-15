import React, { useState, } from 'react';
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
	const [ password, setPassword ] = useState('');
	const [ isRemember, setIsRemember ] = useState(false);

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
					onChange={(event) => {setAccount(event.target.value);}}
					isDisable
				/>
				<Input
					prefixItem={<Icon size={MEDIUM} type={SOLID_LOCK} color={GRAY} />}
					type='password'
					value={password}
					onChange={(event) => {setPassword(event.target.value);}}
					isReadOnly
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
