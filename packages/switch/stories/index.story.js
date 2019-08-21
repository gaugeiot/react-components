import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import Switch from '../src/index';
import { palette } from "@gaugeiot/core";
// import { palette } from "../src/colors";

const stories = storiesOf('Switch', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add('default', () => {

  const checkedColor = select('Checked Color:', palette, palette.success);
  const uncheckedColor = select('Unchecked Color:', palette, palette.secondary);


  return <Switch  
          checked={boolean('Checked', false)} 
          size={number('Size', 96)}
          checkedColor={checkedColor}
          uncheckedColor={uncheckedColor}
          />;
});
