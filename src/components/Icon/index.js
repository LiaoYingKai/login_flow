import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as solidUser, faUnlockAlt as solidLock } from '@fortawesome/free-solid-svg-icons';
import { faUser as regularUser  } from '@fortawesome/free-regular-svg-icons';
import './style.scss';

const TypeEnums = {
	SOLID_USER: 'solid-user',
	REGULAR_USER: 'regular-user',
	SOLID_LOCK: 'solid-lock',
};

const SizeEnums = {
	LARGE: 'large',
	MEDIUM: 'medium',
};

const ColorEnums = {
	LIGHT_BLUE: 'light-blue',
	GRAY: 'gray',
};

const {
	SOLID_USER,
	REGULAR_USER,
	SOLID_LOCK,
} = TypeEnums;

const IconEnums = {
	[SOLID_USER]: solidUser,
	[REGULAR_USER] : regularUser,
	[SOLID_LOCK]: solidLock
};

const propTypes = {
	type: PropTypes.oneOf(Object.values(TypeEnums)),
	size: PropTypes.oneOf(Object.values(SizeEnums)),
	color: PropTypes.oneOf(Object.values(ColorEnums)),
	className: PropTypes.string,
};

const defaultProps = {
	type: TypeEnums.REGULAR_USER,
	size: SizeEnums.LARGE,
	color: ColorEnums.LIGHT_BLUE,
};

function Icon({ className, type, size, color }) {
	return (
		<div className={cx('icon', className, `icon__${size}`, `icon__${color}`)}>
			<FontAwesomeIcon icon={IconEnums[type]} />
		</div>
	);
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.TypeEnums = TypeEnums;
Icon.SizeEnums = SizeEnums;
Icon.ColorEnums = ColorEnums;

export default Icon;
