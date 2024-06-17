import FileUpload from './FileUpload';
import { fn } from '@storybook/test';

export const ActionsData = {
  onDrop: fn(),
};

export default {
  title: 'FileUpload',
  component: FileUpload,
  args: {
    ...ActionsData,
  }
};

export const Default = {
  args: {},
};
