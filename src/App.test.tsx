// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import { shallow, render } from "enzyme";
import App from "./App";
import Pet from './Pet'

describe("App Component", () => {
  it("should render 'Hello World'", () =>{
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('.pet')).toHaveLength(2);
    // expect(component.find('.pet')).to.have.lengthOf(2);
    wrapper.unmount();
  });

  it("should initially mount 2 Pet Components", () => {
    const wrapper = render(<App/>);
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('.pet')).toHaveLength(2);
  });

  it("should mount the Title Component", () => {
    const wrapper = render(<App/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.title')).toHaveLength(1);
  });

  it("should mount as many Pet Components as in App state", () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({
      pets: [new Pet("Leo", "Bird", "Parakeet")]
    });
    expect(wrapper.children()).toHaveLength(3);
  })
});