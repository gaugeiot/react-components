import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import Paper from "../index";

afterEach(cleanup);

describe("Paper", () => {
    test("should render", () => {
        const { asFragment } = render(<Paper />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("should render with squared borders", () => {
        const { asFragment } = render(<Paper square />);

        expect(asFragment()).toMatchSnapshot();
    });
});
