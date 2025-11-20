import type { Meta, StoryObj } from "@storybook/react-vite";

import { StatusButton } from ".";

const meta = {
  component: StatusButton,
  args: {
    onClick: () => {},
    buttonType: "completed",
  },
} satisfies Meta<typeof StatusButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
