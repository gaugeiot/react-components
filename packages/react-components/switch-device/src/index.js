import React from "react";
import styled from "styled-components";
import { palette } from "@gaugeiot/core";
import { SvgGear, SvgWifi } from "@gaugeiot/icon";
import Paper from "@gaugeiot/paper";
import Switch from "@gaugeiot/switch";

const SwitchDeviceHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

const SwitchDeviceContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & .switch-device-btn {
        margin-left: auto;
    }

    & .switch-device-title {
        font-size: 20px;
    }
`;

const SwitchDeviceFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const SwitchDevice = () => (
    <Paper>
        <SwitchDeviceHeader>
            <SvgWifi fill={palette.primary} />
        </SwitchDeviceHeader>
        <SwitchDeviceContent>
            <span className="switch-device-title">{"Device Name"}</span>
            <Switch className="switch-device-btn" size={48} />
        </SwitchDeviceContent>
        <SwitchDeviceFooter>
            <SvgGear />
        </SwitchDeviceFooter>
    </Paper>
);

SwitchDevice.defaultProps = {};

SwitchDevice.propTypes = {};

export default SwitchDevice;
