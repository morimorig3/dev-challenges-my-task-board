import type { Meta, StoryObj } from "@storybook/react-vite";

import { IconButton } from ".";

const meta = {
  component: IconButton,
  args: {
    onClick: () => {},
    isSelected: true,
    iconType: "work",
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
