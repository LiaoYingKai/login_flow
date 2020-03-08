import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const PREFIX_CLASS = 'button';

const SizeEnums = {
	LARGE: 'large',
	MEDIUM: 'medium',
};

const TypeEnums = {
	LARGE: 'large',
	MEDIUM: 'medium',
};

const propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(Object.values(SizeEnums)),
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
};

const defaultProps = {
	onClick: () => {},
	size: SizeEnums.MEDIUM,
};

function Button({ className, children, onClick, type }) {
	return (
		<button
			className={cx(
				className,
				PREFIX_CLASS,
				[`${PREFIX_CLASS}__${type}`],
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.SizeEnums = SizeEnums;
Button.TypeEnums = TypeEnums;

export default Button;
