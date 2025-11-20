import type { Meta, StoryObj } from "@storybook/react-vite";

import { AddTaskCard } from ".";

const meta = {
  component: AddTaskCard,
  args: {
    onClick: () => {},
  },
} satisfies Meta<typeof AddTaskCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
