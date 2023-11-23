import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextInputComponent from './index';

export default {
  title: 'Input',
  component: TextInputComponent,
} as Meta;

const Template: Story = (args) => <TextInputComponent {...args} />;

export const Default = Template.bind({});
