import { useTheme } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";

import CircleIcon from "@/shared/assets/icons/Circle.svg?react";

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();
  return (
    <Button variant="ghost" onClick={toggleTheme}>
      <AppIcon Icon={CircleIcon} filled />
    </Button>
  );
};

export default ThemeSwitcher;
