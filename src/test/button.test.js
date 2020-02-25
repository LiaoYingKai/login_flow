import Button from '../components/Button';
import React from 'react';
import { shallow, mount, } from "enzyme";

describe("test", () => {
	it("test1", () => {
		const wrapper = shallow(<Button/>);

		expect(wrapper.hasClass('test')).toEqual(true);
	});
});

