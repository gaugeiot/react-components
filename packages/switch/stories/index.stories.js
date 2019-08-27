import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, number, select } from "@storybook/addon-knobs";
import { palette } from "@gaugeiot/core";

import Switch from "../src/index";

const stories = storiesOf("Switch", module);

stories.add("default", () => {
    const checkedColor = select("Checked Color:", palette, palette.success);
    const uncheckedColor = select("Unchecked Color:", palette, palette.dark);

    return (
        <Switch
            checked={boolean("Checked", false)}
            checkedColor={checkedColor}
            size={number("Size", 96)}
            uncheckedColor={uncheckedColor}
        />
    );
});
