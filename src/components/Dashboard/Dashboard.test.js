import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Dashboard from "./Dashboard";
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe(`Dashboard component`, () => {
  it("renders the complete page", () => {
    const wrapper = shallow(<Dashboard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
