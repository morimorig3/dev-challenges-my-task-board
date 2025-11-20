import type { Meta, StoryObj } from "@storybook/react-vite";

import { TaskIcons } from ".";

const meta = {
  component: TaskIcons,
  args: {
    iconType: "work",
  },
} satisfies Meta<typeof TaskIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
