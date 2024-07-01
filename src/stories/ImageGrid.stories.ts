import { Meta, StoryObj } from '@storybook/react';
import ImageGrid from './ImageGrid';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/ImageGrid',
  component: ImageGrid,
  tags: ['autodocs'],
  // argTypes: {
  //   columns: {
  //     control: { type: 'number' },
  //   },
  // },
  args: {
    onImageClick: fn(),
  },
} satisfies Meta<typeof ImageGrid>;

export default meta;

type Story = StoryObj<typeof ImageGrid>;

export const Primary: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/200/300', alt: 'Image 1' },
      { src: 'https://picsum.photos/200/300', alt: 'Image 2' },
      { src: 'https://picsum.photos/200/300', alt: 'Image 3' },
    ],
    columns: 3,
  },
};
