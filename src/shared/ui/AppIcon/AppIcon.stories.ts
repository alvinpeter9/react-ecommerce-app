import type { Meta, StoryObj } from "@storybook/react-vite";
import AppIcon from "./AppIcon";
import SearchIcon from "../../assets/icons/Search.svg?react";

const meta = {
  title: "Shared/AppIcon",
  component: AppIcon,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  args: { Icon: SearchIcon },
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBackground: Story = {
  args: {
    theme: "background",
  },
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};

export const WithSize: Story = {
  args: {
    size: 30,
  },
};
