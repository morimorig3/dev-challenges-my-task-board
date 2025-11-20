import type { Meta, StoryObj } from "@storybook/react-vite";

import { TaskCard } from ".";

const meta = {
  component: TaskCard,
  args: {
    iconType: "work",
    cardType: "completed",
    title: "My Task",
    description: "description",
  },
} satisfies Meta<typeof TaskCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
