import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Navbar from "./Navbar";
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe(`Navbar component`, () => {
  it("renders the complete page", () => {
    const wrapper = shallow(<Navbar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
