import type { Meta, StoryObj } from "@storybook/react-vite";

import { BoardAddCard } from ".";

const meta = {
  component: BoardAddCard,
  decorators: [
    (Story) => (
      <div style={{ padding: "3em", backgroundColor: "#00000033" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onClickCreate: () => {},
  },
} satisfies Meta<typeof BoardAddCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
