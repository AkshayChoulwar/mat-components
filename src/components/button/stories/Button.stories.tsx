import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../src';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Text Button',
  variant: 'text',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: 'Outlined Button',
  variant: 'outlined',
};

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  children: 'Contained Button',
  variant: 'contained',
};
