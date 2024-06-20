import { Meta, StoryObj } from '@storybook/react';
import FileUpload from './FileUpload';
import { fn } from '@storybook/test';

const meta = {
  title: 'FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  args: {
    onDrop: fn(),
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Primary: Story = {
  name: '16:9',
  args: { ratio: 16 / 9 },
};

export const Secondary: Story = {
  name: '21:9',
  args: { ratio: 21 / 9 },
};
