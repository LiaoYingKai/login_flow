/* eslint-disable no-undef */
import React from 'react';
import Checkbox from '../../components/Checkbox';
import { shallow, mount, } from "enzyme";
import toJson from 'enzyme-to-json';

describe('Checkbox', () => {
	it('should handle default props', () => {
		const {
			onChange
		} = Checkbox.defaultProps;

		expect(onChange).toBeDefined();
		expect(onChange).toBeInstanceOf(Function);
	});

	it('should select by checkbox class', () => {
		const wrapper = shallow(<Checkbox/>);

		expect(wrapper.hasClass('checkbox')).toEqual(true);
	});

	it('should select by custom class', () => {
		const className = 'mock-class';
		const wrapper = shallow(<Checkbox className={className}/>);

		expect(wrapper.hasClass('mock-class')).toEqual(true);
	});

	it('sholuld handle onChange callback', () => {
		const onChange = jest.fn();
		const wrapper = shallow(<Checkbox onChange={onChange} />);

		wrapper.find('input').at(0).simulate('change', { target: { checked: true } });
		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalled();
	});

	it('should render corrent', () => {
		const onChange = () => {};
		const value = false;
		const wrapper = shallow(<Checkbox onChange={onChange} value={value}/>);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should mount in a full DOM', () => {
		const className = 'mock-class';
		const onChange = () => {};
		const value = false;
		const wrapper = mount(<Checkbox onChange={onChange} className={className} value={value}/>);

		expect(wrapper.props().className).toEqual(className);
		expect(wrapper.props().onChange).toEqual(onChange);
		expect(wrapper.props().value).toEqual(value);
	});
});
