import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { SvgGear, SvgWifi } from "../index";

afterEach(cleanup);

describe("SvgGear", () => {
    test("should render", () => {
        const { asFragment } = render(<SvgGear />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe("SvgWifi", () => {
    test("should render", () => {
        const { asFragment } = render(<SvgWifi />);

        expect(asFragment()).toMatchSnapshot();
    });
});
