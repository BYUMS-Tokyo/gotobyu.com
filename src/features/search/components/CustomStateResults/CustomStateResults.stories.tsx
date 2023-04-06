import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MockInstantSearch } from '@/test/instantsearch';
import { CustomStateResults } from './CustomStateResults';

export default {
  title: 'features/search/CustomStateResults',
  component: CustomStateResults,
  argTypes: {},
} as Meta<typeof CustomStateResults>;

const Template: StoryFn<typeof CustomStateResults> = (args) => (
  <MockInstantSearch>
    <CustomStateResults {...args} />
  </MockInstantSearch>
);

export const Example = Template.bind({});
Example.args = {
  searchState: undefined,
  searchResults: undefined,
  allSearchResults: undefined,
  error: {
    stack: '',
    name: '',
    message: '',
    debugData: [],
    statusCode: 403,
    status: 403,
  },
  searching: false,
  searchingForFacetValues: false,
  isSearchStalled: false,
};
