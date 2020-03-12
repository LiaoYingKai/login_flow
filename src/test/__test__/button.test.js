/* eslint-disable no-undef */
import React from 'react';
import Button from '../../components/Button';
import { shallow, mount, } from "enzyme";
import toJson from 'enzyme-to-json';

describe("Button", () => {
	it("should handle default props", () => {
		const {
			onClick,
			type,
		} = Button.defaultProps;

		expect(onClick).toBeDefined();
		expect(onClick).toBeInstanceOf(Function);
		expect(type).toBe(Button.TypeEnums.BUTTON);
	});

	it('should handle onclick event', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Button onClick={onClick} />);

		wrapper.simulate('click');
		expect(onClick).toHaveBeenCalledTimes(1);
		expect(onClick).toHaveBeenCalled();
	});

	it("should render corrent", () => {
		const className = 'mock-button';
		const onClick = () => {};

		const wrapper = shallow(<Button
			className={className}
			onClick={onClick}
		>
			Button
		</Button>);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should mount in a full DOM", () => {
		const className = 'mock-class';
		const onClick = () => {};
		const type = Button.TypeEnums.TEXT;
		const children = 'Button';

		const wrapper = mount(<Button
			className={className}
			onClick={onClick}
			type={type}
		>
			{children}
		</Button>);

		expect(wrapper.props().className).toEqual(className);
		expect(wrapper.props().onClick).toEqual(onClick);
		expect(wrapper.props().type).toEqual(type);
		expect(wrapper.props().children).toEqual(children);
	});

});

describe("Selected By Class Name", () => {
	it('should selected by button class ', () => {
		const wrapper = shallow(<Button/>);

		expect(wrapper.hasClass('button')).toEqual(true);
	});

	it('should selected by button__text class', () => {
		const wrapper = shallow(<Button type={Button.TypeEnums.TEXT}/>);

		expect(wrapper.hasClass('button__text')).toEqual(true);
	});

	it('should selected by custom class', () => {
		const className = 'mock-class';
		const wrapper = shallow(<Button className={className}/>);

		expect(wrapper.hasClass(className)).toEqual(true);
	});
});

describe("Button Type Enums", () => {
	it('should contain button property', () => {
		const typeName = 'button';
		const formatType = 'BUTTON';

		expect(Button.TypeEnums[formatType]).toEqual(typeName);
	});

	it('should contain text property', () => {
		const typeName = 'text';
		const formatType = 'TEXT';

		expect(Button.TypeEnums[formatType]).toEqual(typeName);
	});
});

