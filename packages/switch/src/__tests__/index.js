import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import Switch from "../index";

afterEach(cleanup);

describe("Switch", () => {
    test("should render", () => {
        const { asFragment } = render(<Switch />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("should render a checked switch", () => {
        const { asFragment } = render(<Switch checked />);

        expect(asFragment()).toMatchSnapshot();
    });
});
