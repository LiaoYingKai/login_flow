import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const PREFIX_CLASS = 'button';

const TypeEnums = {
	BUTTON: 'button',
	TEXT: 'text',
};

const {
	BUTTON,
	TEXT,
} = TypeEnums;

const propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	type: PropTypes.oneOf(Object.values(TypeEnums))
};

const defaultProps = {
	onClick: () => {},
	type: BUTTON,
};

function Button({ className, children, onClick, type }) {
	return (
		<button
			className={cx(
				className,
				{
					[`${PREFIX_CLASS}__text`]: type === TEXT,
					[PREFIX_CLASS]: type === BUTTON,
				}
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.TypeEnums = TypeEnums;

export default Button;
