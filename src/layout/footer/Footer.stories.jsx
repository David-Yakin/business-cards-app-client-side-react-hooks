import React from 'react';

import Footer from './Footer';

export default {
    title: 'Layout/Footer',
    component: Footer,
    parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
