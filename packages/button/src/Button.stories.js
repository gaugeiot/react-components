import React from 'react';

import Button from '.';
import {spacing} from 'theme';

export default {
    component: Button,
    title: 'Design System|Button'
};

export const primary = () => <Button>{'Button'}</Button>;

export const secondary = () => <Button variant="secondary">{'Button'}</Button>;
