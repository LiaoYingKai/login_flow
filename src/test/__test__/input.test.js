/* eslint-disable no-undef */
import React from 'react';
import Input from '../../components/Input';
import { shallow, mount, } from "enzyme";
import toJson from 'enzyme-to-json';

describe("Input", () => {
	it('should handle default ptops', () => {
		const {
			onChange,
			isDisable,
			isReadOnly,
		} = Input.defaultProps;

		expect(onChange).toBeDefined();
		expect(onChange).toBeInstanceOf(Function);
		expect(isDisable).toBe(false);
		expect(isReadOnly).toBe(false);
	});

	it('should handle onChange event', () => {
		const onChange = jest.fn();
		const wrapper = shallow(<Input onChange={onChange} />);

		wrapper.find('input').at(0).simulate('change', { target: { value: 'mock-value' } });
		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalled();
	});
	it("should render corrent", () => {
		const className = 'mock-class';
		const onChange = () => {};
		const value = 'mock-value';
		const isDisable = false;
		const isReadOnly = false;
		const placeholder = 'mock-placeholder';
		const prefixItem = '';
		const errorText = '';
		const type = ''; 

		const wrapper = shallow(<Input
			className={className}
			onChange={onChange}
			value={value}
			isDisable={isDisable}
			isReadOnly={isReadOnly}
			placeholder={placeholder}
			prefixItem={prefixItem}
			errorText={errorText}
			type={type}
		/>);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should mount in a full DOM", () => {
		const className = 'mock-class';
		const onChange = () => {};
		const value = 'mock-value';
		const isDisable = false;
		const isReadOnly = false;
		const placeholder = 'mock-placeholder';
		const prefixItem = '';
		const errorText = '';
		const type = ''; 

		const wrapper = mount(<Input
			className={className}
			onChange={onChange}
			value={value}
			isDisable={isDisable}
			isReadOnly={isReadOnly}
			placeholder={placeholder}
			prefixItem={prefixItem}
			errorText={errorText}
			type={type}
		/>);

		expect(wrapper.props().className).toEqual(className);
		expect(wrapper.props().onChange).toEqual(onChange);
		expect(wrapper.props().value).toEqual(value);
		expect(wrapper.props().isDisable).toEqual(isDisable);
		expect(wrapper.props().isReadOnly).toEqual(isReadOnly);
		expect(wrapper.props().placeholder).toEqual(placeholder);
		expect(wrapper.props().prefixItem).toEqual(prefixItem);
		expect(wrapper.props().errorText).toEqual(errorText);
		expect(wrapper.props().type).toEqual(type);
	});
});

describe('Input Readonly type', () => {
	it('should change isReadonly is true', () => {
		const isReadOnly = true;
		const wrapper = mount(<Input isReadOnly={isReadOnly}/>);

		expect(wrapper.props().isReadOnly).toEqual(isReadOnly);
	});
	it('should change isReadonly is false', () => {
		const isReadOnly = false;
		const wrapper = mount(<Input isReadOnly={isReadOnly}/>);

		expect(wrapper.props().isReadOnly).toEqual(isReadOnly);
	});
});

describe('Input Disabled type', () => {
	it('should change isDisabled is true', () => {
		const isDisabled = true;
		const wrapper = mount(<Input isDisabled={isDisabled}/>);

		expect(wrapper.props().isDisabled).toEqual(isDisabled);
	});
	it('should change isDisabled is false', () => {
		const isDisabled = false;
		const wrapper = mount(<Input isDisabled={isDisabled}/>);

		expect(wrapper.props().isDisabled).toEqual(isDisabled);
	});
});
