import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const propTypes = {
	className: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	isDisable: PropTypes.bool,
	isReadOnly: PropTypes.bool,
	placeholder: PropTypes.string,
	prefixItem: PropTypes.any,
	errorText: PropTypes.string,
	type: PropTypes.string,
};

const defaultProps = {
	onChange: () => {},
	isDisable: false,
	isReadOnly: false,
};

function Input({
	className,
	onChange,
	value,
	isDisable,
	isReadOnly,
	placeholder,
	prefixItem,
	errorText,
	type,
}) {
	return (
		<div className={cx('input', className)}>
			<div className="input__content">
				{prefixItem}
				<input
					onChange={onChange}
					value={value}
					readOnly={isReadOnly}
					disabled={isDisable}
					placeholder={placeholder}
					type={type}
				/>
			</div>
			{ errorText ? <p>{errorText}</p> : null }
		</div>
	);
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
