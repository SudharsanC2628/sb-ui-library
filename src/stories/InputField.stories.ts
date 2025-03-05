import { InputField } from './Components';
import { StoryObj } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: InputField,
};

type Story = StoryObj<typeof InputField>;

export const Text: Story = {
  args: {
    name: 'Enter any value',
    type: 'text',
    isRequired: true,
    isInvalid: false
  },
};

export const Password: Story = {
  args: {
    name: 'Enter your password',
    type: 'password',
    isRequired: false,
    isInvalid: true
  },
};

export const Number: Story = {
  args: {
    name: 'Enter any number',
    type: 'number',
    isRequired: true,
    isInvalid: false
  },
};
