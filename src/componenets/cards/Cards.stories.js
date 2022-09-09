import { action } from '@storybook/addon-actions';
import React from 'react';
import Cards from './Cards';
import { generateCards } from '../../fixture/cardsFixture';

export default {
    title: 'Components/Cards',
    component: Cards,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Cards {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    cards: generateCards(4),
    onDelete: action('delete'),
};
