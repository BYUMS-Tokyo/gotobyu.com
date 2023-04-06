import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Strong } from './Strong';

export default {
  title: 'components/atoms/Strong',
  component: Strong,
  argTypes: {},
} as Meta<typeof Strong>;

const Template: StoryFn<typeof Strong> = (args) => <Strong {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  children: 'Strong',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  children:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur in, velit, quisquam est sequi obcaecati quaerat, quis sapiente earum quo accusamus? Non placeat dolores dolorem est ex nesciunt laborum.'.repeat(
      3,
    ),
};
