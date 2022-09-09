import React from 'react';

import { action } from '@storybook/addon-actions';
import Card from './Card';
import { generateCard } from '../../fixture/cardsFixture';

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    card: generateCard(),
    onDelete: action('delete'),
};
