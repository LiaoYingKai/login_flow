import React from 'react';
import Button from '../components/Button';
import { shallow, mount, } from "enzyme";

describe("Button", () => {
	it("should render corrent", () => {
		const wrapper = shallow(<Button/>);

		expect(wrapper.hasClass('test')).toEqual(true);
	});
});

