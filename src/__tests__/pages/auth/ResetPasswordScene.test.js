import React from "react";
import { shallow } from "enzyme";
import ResetPasswordScene from "../../../pages/auth/ResetPasswordScene";

it("Should render component currectly", () => {
  const wrapper = shallow(<ResetPasswordScene />);
  expect(wrapper).toMatchSnapshot();
});