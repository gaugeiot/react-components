import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import SwitchDevice from "../index";

afterEach(cleanup);

describe("SwitchDevice", () => {
    test("should render", () => {
        const { asFragment } = render(<SwitchDevice />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("should render with squared borders", () => {
        const { asFragment } = render(<SwitchDevice />);

        expect(asFragment()).toMatchSnapshot();
    });
});
