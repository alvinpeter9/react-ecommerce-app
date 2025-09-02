import type { Meta, StoryObj } from "@storybook/react-vite";
import PageLoader from "./PageLoader";

const meta = {
  title: "Widgets/PageLoader",
  component: PageLoader,
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
