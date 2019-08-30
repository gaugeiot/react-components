import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

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
