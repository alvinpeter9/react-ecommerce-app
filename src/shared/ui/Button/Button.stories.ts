import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  args: { children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Circle: Story = {
  args: {
    shape: "circle",
  },
};

export const Pill: Story = {
  args: {
    shape: "pill",
  },
};

export const Rounded: Story = {
  args: {
    shape: "rounded",
  },
};
