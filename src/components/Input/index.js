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
	// verification: PropTypes.arrayOf(PropTypes.shape({
	// 	rule: PropTypes.string,
	// 	VerificationText: PropTypes.string,
	// })),
	type: PropTypes.string,
};

const defaultProps = {
	onChange: () => {},
	isDisable: false,
	isReadOnly: false,
	verification: [],
};

function Input({
	className,
	onChange,
	value,
	isDisable,
	isReadOnly,
	placeholder,
	prefixItem,
	// verification,
	type,
}) {
	// const isAllVerification = verification.filter(item => {
	// 	if (value.test(item.rule)) {
	// 		return item.VerificationText;
	// 	}
	// });

	// const verificationText = isAllVerification[0] ? isAllVerification[0] : false;

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
			<p>
				{/* { verificationText || null } */}
				{/* test */}
			</p>
		</div>
	);
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
