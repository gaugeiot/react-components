import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from "@gaugeiot/core";
// import { palette } from "./colors";

const SwitchStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;

  & .switch-body {
    background-color: ${props => {
      return (props.checked ? props.checkedColor : props.uncheckedColor)
    }};
    border: solid 1px transparent;
    width: ${props => `${props.size}px`}; /* golden numbers*/
    border-radius: 999px; /*trick to get a perfect round border*/
    transition: all 0.5s ease;
  }

  & .switch-toogle {
    width: ${props => `${props.size / 2}px`}; /* half of the SwitchBody*/
    height: ${props => `${props.size / 2}px`}; /* half of the SwitchBody*/
    background-color: white;
    border-radius: 50%;
    border: ${props => 
      props.checked? 
      `solid 2px ${props.checkedColor}` 
      : `solid 2px ${props.uncheckedColor}` };
    box-sizing: border-box;
    transform: ${props => (props.checked ? 'translateX(100%)' : null)};
    transition: transform 0.5s ease;
  }
`;


const Switch = ({ checked, size, onClick, checkedColor, uncheckedColor, ...others }) => {
  return (
    <>
      <SwitchStyled 
          checked={checked}
          size={size}
          checkedColor={checkedColor}
          uncheckedColor={uncheckedColor} 
          {...others}>
        <div className="switch-body">
          <div className="switch-toogle"/>
        </div>
      </SwitchStyled>
    </>
  );
};

Switch.defaultProps = {
  checked: false,
  size: 96,
  checkedColor: palette.success,
  uncheckedColor: palette.secondary
};

Switch.propTypes = {
  checked: PropTypes.bool,
  size: PropTypes.number,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
};

export default Switch;