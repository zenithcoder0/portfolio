import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './../components/Navbar'; // Adjust the path if needed

const meta: Meta<typeof NavBar> = {
  title: 'Navigation/ResponsiveAppBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen', // Makes it look like a real app bar
  },
  tags: ['autodocs'], // Optional, if you're using Storybook autodocs
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
