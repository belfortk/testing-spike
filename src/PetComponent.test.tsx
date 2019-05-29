import React from 'react';
import {shallow, render, mount} from "enzyme";
import PetComponent from "./PetComponent";

describe("Pet Component", () =>{
  it("should render pet text with props", () => {
    const wrapper = shallow(<PetComponent name="Nate" animal="Cat" breed="Hairless"/>);
    expect(wrapper).toMatchSnapshot();
    
    expect(wrapper.find("h3")).toHaveLength(1);
    expect(wrapper.find("h4")).toHaveLength(1);
    expect(wrapper.text()).toMatch("NateCat - Hairless");
    wrapper.setProps({name:"Leo"});
    expect(wrapper.text()).toMatch("LeoCat - Hairless");
    wrapper.unmount();
  })
});