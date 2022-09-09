import React from 'react';

import Header from './Header';

export default {
    title: 'Layout/Header',
    component: Header,
    parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
