import React from 'react';
import {shallow} from 'enzyme';
import TitleComponent from './TitleComponent';

describe("Title Component", () => {
  it("it should render h1", () => {
    const wrapper = shallow(<TitleComponent text={"Hello"} otherText={"World"}/>);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.text()).toMatch("Hello World")
    wrapper.setProps({text:"Goodbye"})
    expect(wrapper.text()).toMatch("Goodbye World")
    wrapper.unmount();
  });
});
