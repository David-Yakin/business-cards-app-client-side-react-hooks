import React from 'react';

import Layout from './Layout';

export default {
    title: 'Layout/Layout',
    component: Layout,
    parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Layout {...args}><div style={{ border: '4px solid red', height: '40vh' }}>Content</div></Layout>;

export const Primary = Template.bind({});
Primary.args = {};
