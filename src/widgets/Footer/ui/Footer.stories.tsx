import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "./Footer";

const meta = {
  title: "Widgets/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
