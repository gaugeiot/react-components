import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean, number, select} from '@storybook/addon-knobs';
import Switch from '../src/index';
import {palette} from '@gaugeiot/core';

const stories = storiesOf('Switch', module);

stories.add('default', () => {
    const checkedColor = select('Checked Color:', palette, palette.success);
    const uncheckedColor = select('Unchecked Color:', palette, palette.secondary);

    return (
        <Switch
            checked={boolean('Checked', false)}
            size={number('Size', 96)}
            checkedColor={checkedColor}
            uncheckedColor={uncheckedColor}
        />
    );
});
