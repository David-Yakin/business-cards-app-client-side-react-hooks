import React from 'react';

import Main from './Main';

export default {
    title: 'Layout/Main',
    component: Main,
    parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Main {...args}><div style={{ border: '4px solid red', height: '100vh' }}>Content</div></Main>;

export const Primary = Template.bind({});
Primary.args = {};
