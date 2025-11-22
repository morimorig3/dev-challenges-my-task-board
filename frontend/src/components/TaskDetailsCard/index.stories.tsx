import type { Meta, StoryObj } from "@storybook/react-vite";

import { TaskDetailsCard } from ".";

const meta = {
  component: TaskDetailsCard,
  decorators: [
    (Story) => (
      <div style={{ padding: "3em", backgroundColor: "#00000033" }}>
        <Story />
      </div>
    ),
  ],
  args: {},
} satisfies Meta<typeof TaskDetailsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
