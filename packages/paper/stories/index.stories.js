import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, number, select } from "@storybook/addon-knobs";
import { colors } from "@gaugeiot/core";

import Paper from "../src/index";

const stories = storiesOf("Paper", module);

stories.add("default", () => {
    const backgroundColor = select("bgColor:", colors, colors.white);
    const color = select("color:", colors, colors.black);

    return (
        <Paper
            bgColor={backgroundColor}
            color={color}
            height={number("height", 40)}
            square={boolean("square", false)}
            width={number("width", 40)}
        >
            {"Test"}
        </Paper>
    );
});
