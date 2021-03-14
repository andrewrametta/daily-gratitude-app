import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Landing from "./Landing";
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe(`Landing component`, () => {
  it("renders the complete page", () => {
    const wrapper = shallow(<Landing />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
