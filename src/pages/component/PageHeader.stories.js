import React from 'react';

import PageHeader from './PageHeader';

export default {
    title: 'Pages/Page Header',
    component: PageHeader,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <PageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Page',
    subTitle: 'This is a sub-title',
};
