/* eslint-disable no-undef */
import React from 'react';
import MessageModal from '../../components/MessageModal';
import { shallow, mount, } from "enzyme";
import toJson from 'enzyme-to-json';

describe("MessageModal", () => {
	it("should handle default props", () => {
		const {
			isVisible,
			title,
			okText,
			onClickOk,
		} = MessageModal.defaultProps;

		expect(isVisible).toBe(false);
		expect(title).toBe('通知');
		expect(okText).toBe('確認');
		expect(onClickOk).toBeDefined();
		expect(onClickOk).toBeInstanceOf(Function);
	});
	
	it('should select by message-modal class', () => {
		const wrapper = shallow(<MessageModal/>);

		expect(wrapper.hasClass('message-modal')).toEqual(true);
	});

	it('should select by custom class', () => {
		const className = 'mock-class';
		const wrapper = shallow(<MessageModal className={className}/>);

		expect(wrapper.hasClass('mock-class')).toEqual(true);
	});

	it("should render corrent", () => {
		const className = 'mock-class';
		const onClickOk = () => {};
		const isVisible = false;
		const title = 'mock-title';
		const message = 'mock-message';
		const okText = 'mock-ok-text';

		const wrapper = shallow(<MessageModal
			className={className}
			onClickOk={onClickOk}
			isVisible={isVisible}
			title={title}
			message={message}
			okText={okText}
		/>);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should mount in a full DOM", () => {
		const className = 'mock-class';
		const onClickOk = () => {};
		const isVisible = false;
		const title = 'mock-title';
		const message = 'mock-message';
		const okText = 'mock-ok-text';

		const wrapper = mount(<MessageModal
			className={className}
			onClickOk={onClickOk}
			isVisible={isVisible}
			title={title}
			message={message}
			okText={okText}
		/>);

		expect(wrapper.props().className).toEqual(className);
		expect(wrapper.props().onClickOk).toEqual(onClickOk);
		expect(wrapper.props().isVisible).toEqual(isVisible);
		expect(wrapper.props().title).toEqual(title);
		expect(wrapper.props().message).toEqual(message);
		expect(wrapper.props().okText).toEqual(okText);
	});
});

