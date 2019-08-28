import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { palette } from "@gaugeiot/core";

import SvgWifi from "../src/Wifi";
import SvgGear from "../src/Gear";

const stories = storiesOf("SgvIcon", module);

stories
    .add("Gear", () => {
        return (
            <SvgGear fill={select("Checked Color:", palette, palette.dark)} />
        );
    })
    .add("Wifi", () => {
        return (
            <SvgWifi fill={select("Checked Color:", palette, palette.dark)} />
        );
    });
