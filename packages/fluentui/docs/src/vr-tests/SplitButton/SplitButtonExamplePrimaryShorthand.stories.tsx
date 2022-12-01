import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryWright, Steps } from 'storywright';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { SplitButton, splitButtonToggleClassName } from '@fluentui/react-northstar';
import SplitButtonExamplePrimaryShorthand from '../../examples/components/SplitButton/Types/SplitButtonExamplePrimary.shorthand';

const selectors = {
  triggerButton: `.${splitButtonToggleClassName}`,
};

export default {
  component: SplitButton,
  title: 'SplitButton',
  decorators: [
    story => (
      <StoryWright steps={new Steps().hover(selectors.triggerButton).snapshot('Hover primary trigger')}>
        {story()}
      </StoryWright>
    ),
  ],
} as ComponentMeta<typeof SplitButton>;

export { SplitButtonExamplePrimaryShorthand };
