import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '@gaugeiot/core';

const PaperStyled = styled.div`
    padding: 0.5rem;
    text-align: start;
    background: ${props => props.bgColor};
    border-radius: ${props => (props.square ? '0px' : '4px')};
    box-shadow: 0 1 3 0 rgba(0, 0, 0, 0.2), 0 1 1 0 rgba(0, 0, 0, 0.14),
        0 2 1 -1 rgba(0, 0, 0, 0.12);
    color: ${props => props.color};
    width: ${props => `${props.width}%`};
    height: ${props => `${props.height}%`};
`;

const Paper = props => {
    return <PaperStyled {...props}>{props.children}</PaperStyled>;
};

Paper.defaultProps = {
    bgColor: colors.white,
    children: '',
    color: colors.black,
    height: 100,
    square: false,
    width: 100
};

Paper.propTypes = {
    bgColor: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    height: PropTypes.number,
    square: PropTypes.bool,
    width: PropTypes.number
};

export default Paper;
