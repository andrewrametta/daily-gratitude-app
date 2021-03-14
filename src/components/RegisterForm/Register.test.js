import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RegisterForm from "./RegisterForm";
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe(`RegisterForm component`, () => {
  it("renders the complete page", () => {
    const wrapper = shallow(<RegisterForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
