import { Button } from './Components';
import { StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const NormalButton: Story = {
  args: {
    buttonText: 'Button Text',
    ariaLabel: 'button aria',
    handleClick: () => {}
  },
};

export const DisabledButton: Story = {
  args: {
    buttonText: 'Disabled Button',
    ariaLabel: 'disabled button aria',
    handleClick: () => {},
    disabled: true
  },
};
