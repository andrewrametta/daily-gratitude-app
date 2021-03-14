import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NewDay from "./NewDay";
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe(`NewDay component`, () => {
  it("renders the complete page", () => {
    const wrapper = shallow(<NewDay />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
