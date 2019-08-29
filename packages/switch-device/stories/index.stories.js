import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { boolean, number, select } from "@storybook/addon-knobs";
import { colors } from "@gaugeiot/core";

import SwitchDevice from "../src/index";

const stories = storiesOf("SwitchDevice", module);

const Wapper = styled.div`
    width: 250px;
`;

stories.add("default", () => {
    return (
        <Wapper>
            <SwitchDevice />
        </Wapper>
    );
});
