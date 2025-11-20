import type { Meta, StoryObj } from "@storybook/react-vite";

import { Header } from ".";

const meta = {
  component: Header,
  args: {
    onClickEdit: () => {},
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
