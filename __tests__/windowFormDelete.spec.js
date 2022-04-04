import React from "react";
import renderer from "react-test-renderer";

// @ts-ignore
import {WindowFormDelete} from "../components/windowMovie/windowFormDelete.tsx";

describe("Presentational component", () => {
  test("Renders correctly WindowFormDelete component", () => {
    const tree = renderer.create(<WindowFormDelete />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
