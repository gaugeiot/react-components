import {configure, addDecorator} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

// automatically import all files ending inside of `stories` directories
const req = require.context('../packages/', true, /\/stories\/.*\.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator(withKnobs);

configure(loadStories, module);
