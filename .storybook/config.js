import { configure } from '@storybook/react';

// automatically import all files ending inside of `stories` directories
const req = require.context('../packages', true, /\/stories\/.*\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
