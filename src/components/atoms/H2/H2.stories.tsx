import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { H2 } from './H2';

export default {
  title: 'components/atoms/H2',
  component: H2,
  argTypes: {},
} as Meta<typeof H2>;

const Template: StoryFn<typeof H2> = (args) => <H2 {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Heading',
};
