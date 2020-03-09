/* eslint-disable no-undef */
import React from 'react';
import Icon from '../../components/Icon';
import { shallow, mount, } from "enzyme";

describe("Icon", () => {
	it("should handle default props", () => {
		const {
			type,
			size,
			color,
		} = Icon.defaultProps;

		expect(type).toBe(Icon.TypeEnums.REGULAR_USER);
		expect(size).toBe(Icon.SizeEnums.LARGE);
		expect(color).toBe(Icon.ColorEnums.LIGHT_BLUE);
	});

	it("should render corrent", () => {
		const className = 'mock-class';
		const wrapper = shallow(<Icon className={className}/>);

		expect(wrapper).toMatchSnapshot();
	});

	it("should mount in a full DOM", () => {
		const className = 'mock-class';
		const type = Icon.TypeEnums.SOLID_USER;
		const color = Icon.ColorEnums.GRAY;
		const size = Icon.SizeEnums.MEDIUM;

		const wrapper = mount(<Icon
			className={className}
			color={color}
			type={type}
			size={size}
		/>);

		expect(wrapper.props().className).toEqual(className);
		expect(wrapper.props().color).toEqual(color);
		expect(wrapper.props().type).toEqual(type);
		expect(wrapper.props().size).toEqual(size);
	});

});

describe("Selected By Class Name", () => {
	it('should selected by Icon class ', () => {
		const wrapper = shallow(<Icon/>);

		expect(wrapper.hasClass('icon')).toEqual(true);
	});

	it('should selected by custom class', () => {
		const className = 'mock-class';
		const wrapper = shallow(<Icon className={className}/>);

		expect(wrapper.hasClass(className)).toEqual(true);
	});
});

describe("Icon Type Enums", () => {
	it('should contain solid-user property', () => {
		const typeName = 'solid-user';
		const formatType = 'SOLID_USER';

		expect(Icon.TypeEnums[formatType]).toEqual(typeName);
	});

	it('should contain regular-user property', () => {
		const typeName = 'regular-user';
		const formatType = 'REGULAR_USER';

		expect(Icon.TypeEnums[formatType]).toEqual(typeName);
	});

	it('should contain solid-lock property', () => {
		const typeName = 'solid-lock';
		const formatType = 'SOLID_LOCK';

		expect(Icon.TypeEnums[formatType]).toEqual(typeName);
	});
});

describe("Icon Color Enums", () => {
	it('should contain light-blue property', () => {
		const typeName = 'light-blue';
		const formatType = 'LIGHT_BLUE';

		expect(Icon.ColorEnums[formatType]).toEqual(typeName);
	});

	it('should contain gray property', () => {
		const typeName = 'gray';
		const formatType = 'GRAY';

		expect(Icon.ColorEnums[formatType]).toEqual(typeName);
	});
});

describe("Icon Size Enums", () => {
	it('should contain large property', () => {
		const typeName = 'large';
		const formatType = 'LARGE';

		expect(Icon.SizeEnums[formatType]).toEqual(typeName);
	});

	it('should contain medium property', () => {
		const typeName = 'medium';
		const formatType = 'MEDIUM';

		expect(Icon.SizeEnums[formatType]).toEqual(typeName);
	});
});
