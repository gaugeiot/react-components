import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { palette } from "@gaugeiot/core";

const SwitchStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;

    & .switch-body {
        background-color: ${props => {
            return props.checked ? props.checkedColor : props.uncheckedColor;
        }};
        border: solid 1px transparent;
        width: ${props => `${props.size}px`}; /* golden numbers */
        border-radius: 999px; /* trick to get a perfect round border */
        transition: all 0.5s ease;
    }

    & .switch-toogle {
        width: ${props => `${props.size / 2}px`}; /* half of the SwitchBody */
        height: ${props => `${props.size / 2}px`}; /* half of the SwitchBody */
        background-color: #fff;
        border-radius: 50%;
        border: ${props =>
            props.checked
                ? `solid 2px ${props.checkedColor}`
                : `solid 2px ${props.uncheckedColor}`};
        box-sizing: border-box;
        transform: ${props => (props.checked ? "translateX(100%)" : null)};
        transition: transform 0.5s ease;
    }
`;

const Switch = ({ checked, size, checkedColor, uncheckedColor, ...others }) => {
    return (
        <>
            <SwitchStyled
                checked={checked}
                checkedColor={checkedColor}
                size={size}
                uncheckedColor={uncheckedColor}
                {...others}
            >
                <div className="switch-body">
                    <div className="switch-toogle" />
                </div>
            </SwitchStyled>
        </>
    );
};

Switch.defaultProps = {
    checked: false,
    checkedColor: palette.success,
    size: 96,
    uncheckedColor: palette.secondary
};

Switch.propTypes = {
    checked: PropTypes.bool,
    checkedColor: PropTypes.string,
    size: PropTypes.number,
    uncheckedColor: PropTypes.string
};

export default Switch;
