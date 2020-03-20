import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import './style.scss';

const propTypes = {
	className: PropTypes.string,
	isVisible: PropTypes.bool,
	title: PropTypes.string,
	message: PropTypes.string,
	onClickOk: PropTypes.func,
	okText: PropTypes.string,
};

const defaultProps = {
	isVisible: false,
	title: '通知',
	okText: '確認',
	onClickOk: () => {},
};

function MessageModal({
	className,
	isVisible,
	title,
	message,
	onClickOk,
	okText,
}) {
	return (
		<div className={cx(
			className,
			"message-modal",
			{ "message-modal--hidden": !isVisible, }
		)}>
			<div className="message-modal__content">
				<div className="message-modal__title">
					{title}
				</div>
				<div className="message-modal__message">
					{message}
				</div>
				<div className="message-modal__footer">
					<Button
						onClick={onClickOk}
					>
						{okText}
					</Button>
				</div>
			</div>
		</div>
	);
}

MessageModal.propTypes = propTypes;
MessageModal.defaultProps = defaultProps;

export default MessageModal;
