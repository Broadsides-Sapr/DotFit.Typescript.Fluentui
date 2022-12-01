import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryWright, Steps } from 'storywright';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Toolbar } from '@fluentui/react-northstar';
import ToolbarExampleMenuShorthand from '../../examples/components/Toolbar/Visual/ToolbarExampleCompose.shorthand';

export default {
  component: Toolbar,
  title: 'Toolbar',
  decorators: [
    story => (
      <StoryWright steps={new Steps().click('#open-menu').snapshot('Shows a menu').end()}>{story()}</StoryWright>
    ),
  ],
} as ComponentMeta<typeof Toolbar>;

export { ToolbarExampleMenuShorthand };
